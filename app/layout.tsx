import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/widgets/Navbar";
import Sidebar from "@/components/widgets/Sidebar";

const geistSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beedy AI",
  description: "Your next level AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} relative min-h-screen antialiased`}
      >
        <Navbar />
        <Sidebar />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
