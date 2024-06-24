import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Walmart Next",
  description: "Walmart",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />

        <div className=" flex ">
          {modal}
          {children}
        </div>
      </body>
    </html>
  );
}
