import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivelar Terraplanagem | Cambé",
  description:
    "Terraplanagem profissional em Cambé e região. Qualidade, precisão e compromisso. Equipamentos modernos e equipe especializada.",

  keywords: [
    "terraplanagem",
    "terraplanagem Cambé",
    "terraplanagem Londrina",
    "nivelamento de solo",
    "preparo de terreno",
    "obras de terra",
  ],

  authors: [{ name: "Nivelar Terraplanagem" }],
  creator: "Nivelar Terraplanagem",

  // ✅ CORRETO (Google Search Console)
  verification: {
    google: "S8sT98lJJEnQCgFRh2PSio7hPRahvs_vpJpx6vpMV1s",
  },

  openGraph: {
    title: "Nivelar Terraplanagem",
    description:
      "Onde começa cada grande obra. Serviços de terraplanagem com qualidade e precisão.",
    url: "https://nivelarterraplanagem.com.br",
    siteName: "Nivelar Terraplanagem",
    images: [
      {
        url: "/images/equipamentos/maquina1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}