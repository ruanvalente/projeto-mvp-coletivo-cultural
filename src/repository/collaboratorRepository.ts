import { Collaborator } from "../entities/dto/collaborator";
import { BaseRepository } from "../entities/implements/baseRepository";
import { supabaseServiceProvider } from "../lib/supabase";

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_KEY = process.env.SUPABASE_KEY ?? "";

export class CollaboratorRepository implements BaseRepository<Collaborator> {
  async list(tableName: string): Promise<Collaborator[]> {
    try {
      const supabase = await supabaseServiceProvider(
        SUPABASE_URL,
        SUPABASE_KEY
      );
      const { data, error } = await supabase
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
