import { Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Malabar Hill Capital",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-uncut-sans antialiased`}>
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>  );
}
