import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Etomi James - Creative Talent & Brand Strategist",
  description: "High-end editorial work, creative direction, and brand strategy. Modelling, acting, content creation, and consulting services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${raleway.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
