import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";

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
   robots: "index, follow",
   keywords: "student id card, id card generator, enchong dee, university, meme",
   openGraph: {
      title: "Enchong Dee University ID Card Generator",
      description: "Create your own Enchong Dee University student ID card",
      type: "website",
    },
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script 
        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7740367060764218"
        crossOrigin="anonymous">
        </script>
      </head>
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} ${crimson.variable} min-h-full flex flex-col`}>
        <meta name="google-site-verification" content="wC6LYVUdInNmM8bVJHak82l0fMGlZaZQFbR-NwrtKDA" />
        {children}
        <Toaster/>
      </body>
    </html>
  )
}