import { ChakraProvider } from "./UI/providers/chakara";

export const metadata = {
  title: "Project MVP - Coletivo culttural",
  description: "Sistema de gerenciamento de parks's infantis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
