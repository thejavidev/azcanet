

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-[65px]">{children}</main>
      </body>
    </html>
  );
}
