import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../components/Providers";
import favicon from '../public/favicon.png'
import { getServerSession } from 'next-auth';
import { authConfig } from "../configs/auth";
import { IUserState } from "../typescript/interfaces/data";
import { apiInstance } from "../redux/user-slice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legacy Pages",
  description:
    "LegacyPages - це інноваційна і захоплива платформа з вивчення історії, наша мета зберегти історичну спадщину та зробити її доступною, цікавою, взаємодійною.",
  keywords: ["Legacy Pages", "legacyPages", "legacy-pages"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);
  let userData: IUserState;
  if (session) {
    const { email } = session.user;
    const { data } = await apiInstance.post(`auth/get`, {email});
    userData = data.data
  }
  return (
    <html lang="en">
      <head>
      <link rel="icon" href={favicon.src} sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers user={userData}>{children}</Providers>
      </body>
    </html>
  );
}
