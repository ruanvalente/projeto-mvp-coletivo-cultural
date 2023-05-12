import { CollaboratorService } from "@/services/collaboratorServices";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case "GET":
      const collaboratorServices = new CollaboratorService();
      const collaborator = await collaboratorServices.listUsers();
      return response.json({ data: collaborator });
    case "POST":
      return response.json({ data: request.body });
    default:
      response.setHeader("Allow", ["GET", "POST"]);
      response
        .status(405)
        .json({ data: `Method ${request.method} Not Allowed` });
      break;
  }
}
