import "./globals.css";

export const metadata = {
  title: "Nivelar Terraplanagem",
  description: "Onde começa cada grande obra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}