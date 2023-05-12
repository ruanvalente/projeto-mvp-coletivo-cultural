import { Collaborator } from "../entities/dto/collaborator";
import { BaseRepository } from "../entities/implements/baseRepository";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class CollaboratorRepository implements BaseRepository<Collaborator> {
  private readonly supabase: SupabaseClient;

  constructor(
    private readonly supabaseUrl: string,
    private readonly supabaseKey: string
  ) {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  async list(tableName: string): Promise<Collaborator[]> {
    try {
      const { data, error } = await this.supabase
        .from(tableName)
        .select("*")
        .order("email", { ascending: false });

      if (error) {
        throw new Error(`Erro ao listar usuários: ${error.message}`);
      }

      if (!data) {
        throw new Error("Nenhum usuário encontrado.");
      }
      return data as Collaborator[];
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao listar usuários.");
    }
  }
}
