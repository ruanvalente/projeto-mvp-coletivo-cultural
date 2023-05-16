import { Collaborator } from "../entities/dto/collaborator";
import { CollaboratorRepository } from "../repository/collaboratorRepository";
import { SUPABASE_URL, SUPABASE_KEY } from "@/lib/supabase/constants";

export class CollaboratorService {
  private collaborator: CollaboratorRepository;

  constructor() {
    this.collaborator = new CollaboratorRepository(SUPABASE_URL, SUPABASE_KEY);
  }

  async listUsers(): Promise<Collaborator[]> {
    return await this.collaborator.list("collaborators");
  }

  async createCollaborator(
    collaboratorData: Collaborator
  ): Promise<{ collaborator?: Collaborator; error?: string }> {
    const { result, error } = await this.collaborator.create(
      "collaborators",
      collaboratorData
    );

    if (error) {
      return { error: error };
    }

    return { collaborator: result };
  }
}
