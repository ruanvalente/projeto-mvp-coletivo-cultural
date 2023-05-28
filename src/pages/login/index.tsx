import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData, loginSchema } from "@/utils/validations/shema/login";
import { validations } from "@/utils/validations/validation";
import { notifyUtils } from "@/utils/notify/notify";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { setCookie } from "@/utils/cookies";

export default function LoginPage() {
  const router = useRouter();
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  async function onSubmit(data: LoginFormData) {
    setSpinnerLoading((prev) => !prev);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      setCookie(
        "coletivo_cultural",
        JSON.stringify(responseData.data.response.session.access_token)
      );

      if (response.ok) {
        router.push("/");
        setSpinnerLoading((prev) => !prev);
        return;
      }
      notifyUtils(response.status, responseData.error);
      reset();
      setSpinnerLoading((prev) => !prev);
    } catch (error) {
      setSpinnerLoading((prev) => !prev);
      console.error(error);
    }
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sistema Coletivo Cultural</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="seuemail@email.com"
                  {...register("email", {
                    required: "This is required",
                    pattern: new RegExp(validations.EMAIL),
                  })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={!!errors.password}>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="********"
                  {...register("password", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  {spinnerLoading ? <Spinner /> : "Login"}
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Stack pt={6}>
            <Text align={"center"}>
              Sistema <Link color={"blue.400"}>Coletivo Cultural</Link>
            </Text>
            <Text align={"center"} as="span">
              {" "}
              v0.1 - Beta
            </Text>
          </Stack>
        </Stack>
      </form>
      <ToastContainer />
    </Flex>
  );
}
