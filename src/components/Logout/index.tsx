"use client";

import { Text, Button } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";

export function Logout({ collapse = false }) {
  return (
    <Button
      borderRadius={collapse ? "full" : "8px"}
      w="full"
      p={2}
      alignItems="center"
      justifyContent="center"
      gap={2}
      flexDirection={collapse ? "row" : "column-reverse"}
      colorScheme="blue"
    >
      <MdLogout />
      {collapse && (
        <Text as="small" color="white" fontSize={12} lineHeight={0}>
          Sair
        </Text>
      )}
    </Button>
  );
}
