import { ReactNode } from "react";
import { useRouter } from "next/router";
import { Flex, HStack, Box } from "@chakra-ui/react";
import { Sidebar } from "@/components/Sidebar";
import { useCollapse } from "@/context/providers/useCollapse";
import LoginPage from "@/pages/login";

type LayoutProps = {
  children: ReactNode;
};
export function Layout({ children }: LayoutProps) {
  const { collapse } = useCollapse();
  const router = useRouter();

  if (router.pathname === "/login") {
    return <LoginPage />;
  }

  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={4}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 300 : 100}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        flexDirection="column"
        borderRadius="2xl"
      >
        <Box m={6}>{children}</Box>
      </Flex>
    </HStack>
  );
}
