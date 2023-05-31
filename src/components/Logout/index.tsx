"use client";

import { removeCookie } from "@/utils/cookies";
import { Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdLogout } from "react-icons/md";

export function Logout({ collapse = false }) {
  const router = useRouter();

  function handlerLogout() {
    removeCookie("coletivo_cultural");
    router.push("/login");
  }

  return (
    <Button
      borderRadius={collapse ? "full" : "8px"}
      w="full"
      p={2}
      alignItems="center"
      justifyContent="center"
      gap={2}
      flexDirection={collapse ? "row" : "column-reverse"}
      bg="gray.900"
      color="white"
      _hover={{
        bg: "gray.600",
      }}
      onClick={handlerLogout}
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
