import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ying Kung — Prospective PhD Applicant",
  description: "Li-ion battery modeling & diagnostics; ML for lithium plating.",
  openGraph: {
    title: "Ying Kung — Prospective PhD Applicant",
    description: "Li-ion battery modeling & diagnostics; ML for lithium plating.",
    images: ["/images/og-cover.jpg"], // 可放 png/jpg
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
