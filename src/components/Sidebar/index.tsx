"use client";

import { Box } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { Logout } from "../Logout";

export function Sidebar({ collapse = false }) {
  return (
    <>
      <Box w="full">
        <Logo collapse={collapse} />
        <Navigation collapse={collapse} />
      </Box>
      <Logout collapse={collapse} />
    </>
  );
}
