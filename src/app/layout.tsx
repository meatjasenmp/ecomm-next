import React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Container from "@/app/parts/Container";
import Sidebar from "@/app/parts/Sidebar";
import "@/app/styles/globals.css";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasen's Ecomm App",
  description: "For kicks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="root">
        <main className={roboto.className}>
          <Sidebar>Sidebar</Sidebar>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
