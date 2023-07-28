import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../components/Providers";

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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
