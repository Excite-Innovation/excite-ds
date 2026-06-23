import { Geist, Geist_Mono, Inter } from "next/font/google"
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Banner } from "fumadocs-ui/components/banner";
import 'katex/dist/katex.css';


const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: {
    default: "Excite! DS",
    template: "%s | Excite! DS",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body className="flex flex-col min-h-screen">
        <Banner variant="rainbow" changeLayout={true}> Version 2.0 Available! </Banner>
        <RootProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </RootProvider>
      </body>
    </html>
  )
}
