import { BaseAuth, BaseAuthResponse } from "@/entities/implements/baseAuth";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

export class SupabaseAuth implements BaseAuth {
  private readonly supabase: SupabaseClient;

  constructor(
    private readonly supabaseURL: string,
    private readonly supabaseKey: string
  ) {
    this.supabase = createClient(this.supabaseURL, this.supabaseKey);
  }

  async auth(email: string, password: string): Promise<BaseAuthResponse> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { response: { error: error.message } };
      }

      return { response: { user: data.user, session: data.session } };
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return { response: { error: "Error ao fazer login" } };
    }
  }
}
