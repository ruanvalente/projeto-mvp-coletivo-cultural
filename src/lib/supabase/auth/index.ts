import { BaseAuth } from "@/entities/implements/baseAuth";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

export class SupabaseAuth implements BaseAuth {
  private readonly supabase: SupabaseClient;

  constructor(
    private readonly supabaseURL: string,
    private readonly supabaseKey: string
  ) {
    this.supabase = createClient(this.supabaseURL, this.supabaseKey);
  }

  async auth(
    email: string,
    password: string
  ): Promise<{ result?: boolean; error?: string }> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log(data);

      if (error) {
        return { error: error.message };
      }

      return { result: true };
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return { error: "Erro ao fazer login" };
    }
  }
}
