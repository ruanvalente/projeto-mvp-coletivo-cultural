import { Collaborator } from "../entities/dto/collaborator";
import { CollaboratorRepository } from "../repository/collaboratorRepository";

export class CollaboratorService {
  private collaborator: CollaboratorRepository;

  constructor() {
    this.collaborator = new CollaboratorRepository();
  }

  async listUsers(): Promise<Collaborator[]> {
    return await this.collaborator.list("collaborators");
  }
}
