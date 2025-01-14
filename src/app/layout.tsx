import type { Metadata } from "next";
import { Inter, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ContextProvider from "./context";
import { GlobalContext, GlobalProvider } from "./components/state/Global";
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
  title: "IAI.CENTER",
  description: "IAI",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={` ${monters.variable} ${openSans.variable} ${inter.variable} antialiased bgmain  `}
      >
        
        <ContextProvider>
          <GlobalProvider>
            {children}
            </GlobalProvider>   
        </ContextProvider>
      </body>    
    </html>
  );
}
