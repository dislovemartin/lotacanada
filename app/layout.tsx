import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Announcement from "@/components/announcement"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "LOTA Canada | Leaders of Tomorrow Association",
  description: "Fostering professional growth and leadership development across Canada",
    generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Announcement />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'