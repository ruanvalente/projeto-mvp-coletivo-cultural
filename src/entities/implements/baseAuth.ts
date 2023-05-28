import { User, Session } from "@supabase/supabase-js";

export interface BaseAuthResponse {
  response?: {
    user?: User | null;
    session?: Session | null;
    error?: string;
  };
}

export interface BaseAuth {
  auth(email: string, password: string): Promise<BaseAuthResponse>;
}
