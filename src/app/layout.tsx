import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: "devfinder",
  description:
    "Check out Darkstar's solution for the Github User Search App challenge on Frontend Mentor",

  authors: {
    name: "Darkstar",
    url: "https://github.com/DarkstarXDD",
  },

  openGraph: {
    type: "website",
    url: "https://devfinder.vercel.app/",
    title: "devfinder",

    description:
      "Check out Darkstar's solution for the Github User Search App challenge on Frontend Mentor",

    images: {
      url: "https://devfinder.vercel.app/og-img.jpeg",
      type: "image/jpeg",
      width: 1440,
      height: 756,
    },
  },
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-inter font-regular text-foreground flex min-h-dvh flex-col items-center justify-center bg-blue-50 p-4 text-base font-normal text-blue-800 md:p-6 dark:bg-blue-950 dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
