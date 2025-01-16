import type { Metadata } from "next";
import { Inter, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ContextProvider from "./context";
import { GlobalProvider } from "./components/state/Global";
import Head from "next/head";

const monters = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IAI.PRESALE",
  description: "IAI",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        // edit for responsive + for fix
        className={` ${monters.variable} ${openSans.variable} ${inter.variable} antialiased bgmain min-h-[100vh] grow flex flex-col`}
      >
        <ContextProvider>
          <GlobalProvider>{children}</GlobalProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
