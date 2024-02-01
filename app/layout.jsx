import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from './components/Navbar'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Savannah Trace",
    description: "An MQTT client",
}

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
                <body className={inter.className}>
                    <Navbar />
                    {children}
                    <Toaster />
                </body>
        </html>
    )
}
