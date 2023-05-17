export interface BaseAuth {
  auth(
    email: string,
    password: string
  ): Promise<{ result?: boolean; error?: string }>;
}
