import "./globals.css";

export const metadata = {
  title: "Nivelar Terraplanagem",
  description: "Terraplanagem de alto padrão em Cambé e região",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}