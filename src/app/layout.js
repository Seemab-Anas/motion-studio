import "./globals.css";
import Navbar from "@/components/Navbar";
import { Manrope, Anton } from "next/font/google";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "600", "700"],
});
const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400", // ← explicitly request the available weight
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${anton.variable} antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
