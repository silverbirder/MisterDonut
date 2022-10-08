import { createContext } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

type Props = {
  children: React.ReactNode;
};

export const SupabaseContext = createContext<SupabaseClient | null>(null);

const createSupabaseClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:6006",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "key"
  );

export const SupabaseProvider = ({ children }: Props) => (
  <SupabaseContext.Provider value={createSupabaseClient()}>
    {children}
  </SupabaseContext.Provider>
);
