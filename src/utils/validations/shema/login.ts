import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("O campo e-mail é obrigatório"),
  password: yup.string().required("O campo senha é obrigatório"),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
