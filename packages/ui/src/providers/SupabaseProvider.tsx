import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createClient, User, UserCredentials } from "@supabase/supabase-js";
import { useMyProfileQuery } from "@misterdonut/graphql";

type Props = {
  children: React.ReactNode;
};

type SuccessCallback = () => void;
type FailedCallback = () => void;

type SupabaseProps = {
  profile: Profile | null;
  signOut: (
    successCallback?: SuccessCallback,
    failedCallback?: FailedCallback
  ) => void;
  signIn: (
    credentials: UserCredentials,
    successCallback?: SuccessCallback,
    failedCallback?: FailedCallback
  ) => void;
  signUp: (
    credentials: UserCredentials,
    successCallback?: SuccessCallback,
    failedCallback?: FailedCallback
  ) => void;
};

export type Profile = {
  id: string;
  username: string;
  avatarUrl: string;
};

export const SupabaseContext = createContext<SupabaseProps>({
  profile: null,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
});

export const SupabaseProvider = ({ children }: Props) => {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:6006",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "key"
  );
  const [user, setUser] = useState<User | null>(null);
  const { data: profileQuery, refetch } = useMyProfileQuery({
    variables: { uid: user?.id },
    skip: user === null,
  });

  const signOut = useCallback(
    (successCallback?: SuccessCallback, failedCallback?: FailedCallback) => {
      client.auth.signOut().then(successCallback).catch(failedCallback);
      setUser(null);
    },
    [client.auth]
  );

  const signIn = useCallback(
    (
      credentials: UserCredentials,
      successCallback?: SuccessCallback,
      failedCallback?: FailedCallback
    ) => {
      client.auth
        .signIn(credentials)
        .then(successCallback)
        .catch(failedCallback);
      setUser(client.auth.user());
    },
    [client.auth]
  );

  const signUp = useCallback(
    (
      credentials: UserCredentials,
      successCallback?: SuccessCallback,
      failedCallback?: FailedCallback
    ) => {
      client.auth
        .signUp(credentials)
        .then(successCallback)
        .catch(failedCallback);
      setUser(client.auth.user());
    },
    [client.auth]
  );

  // 初回ロード時に認証済みユーザーをセットする
  useEffect(() => {
    setUser(client.auth.user());
  }, [client.auth]);

  useEffect(() => {
    refetch({ uid: user?.id }).catch(() => {});
  }, [refetch, user]);

  const profiles: Profile[] = useMemo(
    () =>
      profileQuery?.profileCollection?.edges.map((edge) => ({
        avatarUrl: edge.node.avatar_url || "",
        username: edge.node.username || "",
        id: (edge.node.id as string) || "",
      })) || [],
    [profileQuery]
  );
  const profile = useMemo(
    () => (user === null || profiles.length === 0 ? null : profiles[0]),
    [profiles, user]
  );

  const value: SupabaseProps = useMemo(
    () => ({
      profile,
      signOut,
      signIn,
      signUp,
    }),
    [profile, signIn, signOut, signUp]
  );

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
};
