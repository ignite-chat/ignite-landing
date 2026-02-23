import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignite Landing Page",
  description: "Landing Page template for Ignite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
