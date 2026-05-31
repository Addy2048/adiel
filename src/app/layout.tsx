import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adiel Elifelet Azaliwa — Full-Stack Developer & IoT Engineer",
  description:
    "Adiel Elifelet Azaliwa — Chief Technical Officer and full-stack engineer building web, mobile and embedded systems. A versatile DIT Computer Engineering graduate specializing in front-end, back-end, mobile and connected hardware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.variable} ${manrope.variable} ${jbMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
