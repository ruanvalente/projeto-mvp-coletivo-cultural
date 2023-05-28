import { Collaborator } from "@/entities/dto/collaborator";
import { CollaboratorService } from "@/services/collaboratorServices";
import { setCookie } from "@/utils/cookies";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const collaboratorServices = new CollaboratorService();
  switch (request.method) {
    case "GET":
      const collaborator = await collaboratorServices.listUsers();
      return response.json({ data: collaborator });
    case "POST":
      const collaboratorData = request.body as Collaborator;
      const dataResult = await collaboratorServices.authCollaborator(
        collaboratorData.email,
        collaboratorData.password
      );
      if (dataResult.response?.error) {
        return response.status(400).json({ error: dataResult.response.error });
      }
      return response.json({ data: dataResult });
    default:
      response.setHeader("Allow", ["GET", "POST"]);
      response
        .status(405)
        .json({ data: `Method ${request.method} Not Allowed` });
      break;
  }
}
