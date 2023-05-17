import { SupabaseAuth } from "@/lib/supabase/auth";
import { Collaborator } from "../entities/dto/collaborator";
import { CollaboratorRepository } from "../repository/collaboratorRepository";
import { SUPABASE_URL, SUPABASE_KEY } from "@/lib/supabase/constants";

export class CollaboratorService {
  private collaboratorRepository: CollaboratorRepository;
  private supabaseAuth: SupabaseAuth;

  constructor() {
    this.collaboratorRepository = new CollaboratorRepository(
      SUPABASE_URL,
      SUPABASE_KEY
    );
    this.supabaseAuth = new SupabaseAuth(SUPABASE_URL, SUPABASE_KEY);
  }

  async listUsers(): Promise<Collaborator[]> {
    return await this.collaboratorRepository.list("collaborators");
  }

  async createCollaborator(
    collaboratorData: Collaborator
  ): Promise<{ collaborator?: Collaborator; error?: string }> {
    const { result, error } = await this.collaboratorRepository.create(
      "collaboratorss",
      collaboratorData
    );

    if (error) {
      return { error: error };
    }

    return { collaborator: result };
  }

  async authCollaborator(
    email: string,
    password: string
  ): Promise<{ result?: boolean; error?: string }> {
    const { result, error } = await this.supabaseAuth.auth(email, password);

    if (error) {
      return { error };
    }
    return { result };
  }
}
