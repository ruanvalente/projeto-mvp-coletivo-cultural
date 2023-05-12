import { createClient } from "@supabase/supabase-js";

export async function supabaseServiceProvider(
  supabaseURL: string,
  supabaseKey: string
) {
  if (!supabaseURL || !supabaseKey) {
    throw new Error("I need to provider a supabase url and a key");
  }

  return createClient(supabaseURL, supabaseKey);
}
