import { CollaboratorService } from "@/services/collaboratorServices";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const collaboratorServices = new CollaboratorService();
  const collaborator = await collaboratorServices.listUsers();
  return response.json({ data: collaborator });
}
