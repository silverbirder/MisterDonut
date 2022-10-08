import { createContext } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

type Props = {
  client?: SupabaseClient;
  children: React.ReactNode;
};

export const SupabaseContext = createContext<SupabaseClient | null>(null);

const createSupabaseClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:6006",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "key"
  );

export const SupabaseProvider = ({ client, children }: Props) => (
  <SupabaseContext.Provider value={client || createSupabaseClient()}>
    {children}
  </SupabaseContext.Provider>
);
