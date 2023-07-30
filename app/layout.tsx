import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../components/Providers";
import favicon from '../public/favicon.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legacy Pages",
  description:
    "LegacyPages - це інноваційна і захоплива платформа з вивчення історії, наша мета зберегти історичну спадщину та зробити її доступною, цікавою, взаємодійною.",
  keywords: ["Legacy Pages", "legacyPages", "legacy-pages"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href={favicon.src} sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
