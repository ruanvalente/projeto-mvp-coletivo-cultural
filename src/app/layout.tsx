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
      <body>{children}</body>
    </html>
  );
}
