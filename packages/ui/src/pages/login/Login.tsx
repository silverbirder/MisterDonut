import { SupabaseContext } from "@ui/providers";
import { useContext } from "react";

export const Login = () => {
  const supabase = useContext(SupabaseContext);
  const user = supabase?.auth.user();
  return <>{JSON.stringify(user)}</>;
};
