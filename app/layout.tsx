import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Enchong Dee University ID Generator",
  description: "This is a fun and fictional project that allows you to create a personalized Enchong Dee University ID card. Simply fill in your details, upload a profile picture, and generate your own unique ID card. Perfect for fans of Enchong Dee and those who want to add a touch of creativity to their online presence. Please note that this project is purely for entertainment purposes and is not affiliated with any real institution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} ${crimson.variable} min-h-full flex flex-col`}>
        {children}
        <Toaster/>
      </body>
    </html>
  )
}