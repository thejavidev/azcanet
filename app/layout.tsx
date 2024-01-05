"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Get } from "@/services/fetchServices";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition

import Header from "@/components/Header/Header";
import "./globals.css";
import SiteLoading from "@/components/Loading/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Get().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <CSSTransition
            in={loading}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <SiteLoading />
          </CSSTransition>

          <CSSTransition
            in={!loading}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <>
              <Header />
              <main className="pt-[65px]">{children}</main>
            </>
          </CSSTransition>
        </>
      </body>
    </html>
  );
}
