import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TheVillageHacker | Naveen",
  description: "Security Analyst | Application Security | Researcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
