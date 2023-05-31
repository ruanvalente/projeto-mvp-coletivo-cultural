"use client";

import React from "react";
import Link from "next/link";
import {
  ListIcon,
  Link as LinkChakra,
  Heading,
  Box,
  Badge,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

type NavItemProps = {
  item: {
    type: string;
    label: string;
    icon?: IconType;
    path?: string;
    notifications?: number;
    messages?: number;
  };
  isActive: boolean;
  collapse: boolean;
  handleItemClick: () => void;
};
export function NavItem({
  item,
  isActive = false,
  collapse = false,
  handleItemClick,
}: NavItemProps) {
  const { label, path } = item;

  if (item.type === "link") {
    const { icon, notifications, messages } = item;
    return (
      <Box display="flex" alignItems="center" my={6} justifyContent="center">
        <LinkChakra
          href={path}
          as={Link}
          gap={1}
          display="flex"
          alignItems="center"
          _hover={{ textDecoration: "none", color: "gray.600" }}
          fontWeight="medium"
          color={isActive ? "gray.900" : "gray.400"}
          w="full"
          justifyContent={!collapse ? "center" : ""}
          onClick={handleItemClick}
        >
          <ListIcon as={icon} fontSize={22} m="0" />
          {collapse && <Text>{label}</Text>}
        </LinkChakra>
        {collapse && (
          <>
            {notifications && (
              <Badge
                borderRadius="full"
                colorScheme="yellow"
                w={6}
                textAlign="center"
              >
                {notifications}
              </Badge>
            )}
            {messages && (
              <Badge
                borderRadius="full"
                colorScheme="green"
                w={6}
                textAlign="center"
              >
                {messages}
              </Badge>
            )}
          </>
        )}
      </Box>
    );
  }
  return (
    <Heading
      color="gray.400"
      fontWeight="medium"
      textTransform="uppercase"
      fontSize="sm"
      borderTopWidth={1}
      borderColor="gray.100"
      pt={collapse ? 8 : 0}
      my={6}
    >
      <Text display={collapse ? "flex" : "none"}>{label}</Text>
    </Heading>
  );
}
