import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/header"
import {Footer }from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "iPlantTech - Your Plant Care Companion",
  description: "Grow smarter with iPlant Tech the smart gardening solution that automates watering, lighting, and plant care..",
  icons: {
    icon: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752267029/logo_tqj6ky.svg",
    apple: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752267029/logo_tqj6ky.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
