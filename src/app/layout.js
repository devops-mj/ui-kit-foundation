import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UI Kit Foundation",
  description: "Premium Asset Architecture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        {/* GLOBAL HOVERING NAVBAR BRICK */}
        <Navbar />
        
        {/* MAIN BODY AREA WITH TOP PADDING OFFSET FOR THE STICKY NAV */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* GLOBAL FOOTER BRICK */}
        <Footer />
      </body>
    </html>
  );
}