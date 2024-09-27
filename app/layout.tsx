import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Travel",
  description: "Travel at your own comfort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-12">
        <Navbar />
        <main className="relative overflow-hidden">
        {children}

        </main>
        <Footer />
      </body>
    </html>
  );
}
