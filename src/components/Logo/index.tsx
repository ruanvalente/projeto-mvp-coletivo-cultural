"use client";

import { useCollapse } from "@/context/providers/useCollapse";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

export function Logo({ collapse = false }) {
  const { setCollapse } = useCollapse();

  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={collapse ? "row" : "column"}
      gap={4}
    >
      <Box display="flex" alignItems="center" justifyContent={"center"} gap={2}>
        {collapse && (
          <Text
            fontWeight="bold"
            textAlign={"center"}
            fontSize={16}
            color="gray.900"
          >
            Coletivo Cultural LTDA
          </Text>
        )}
      </Box>
      <IconButton
        bg="gray.800"
        _hover={{
          bg: "gray.600",
        }}
        aria-label="Menu Colapse"
        icon={<MdMenu color="white" />}
        onClick={() => setCollapse(!collapse)}
      />
    </Flex>
  );
}
