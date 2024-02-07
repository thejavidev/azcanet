"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Get } from "@/services/fetchServices";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition
import Header from "@/components/Header/Header";
import "./globals.css";
import SiteLoading from "@/components/Loading/Loading";
import Footer from "@/components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import { GoMoveToTop } from "react-icons/go";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    useEffect(() => {
      Get()?.then(() => {
        setLoading(false);
      });

      window.addEventListener("scroll", toggleVisible);
    }, []);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet icon" type="image/x-icon" href="/logo-fav.ico" />
      </head>

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
              <div className="pt-[65px]">
                <AnimatePresence>{children}</AnimatePresence>
                <button
                  style={{ display: visible ? "inline" : "none" }}
                  className="fixed tls flex border-[1px] items-center justify-center  right-10  bottom-10 h-[50px] w-[50px] bg-[#ec5a44]  rounded-full text-[30px] cursor-pointer z-10 "
                >
                  <GoMoveToTop
                    className="text-white inline"
                    onClick={scrollToTop}
                  />
                </button>
              </div>
              <Footer />
            </>
          </CSSTransition>
        </>
      </body>
    </html>
  );
}
