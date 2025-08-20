import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; 
import Footer from "@/components/footer"; 
import WhatsAppChat from "@/components/Whatsapp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clarygen",
  description:
    "Clarygen delivers IT support, consultancy, and financial solutions tailored for growing businesses.",
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/icons/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/icons/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar /> 
        {children}
        <WhatsAppChat />
        <Footer />
      </body>
    </html>
  );
}
