import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import "@/app/custom-styles.css"

export const metadata = {
  title: "Catarina Rodrigues - Odontologia Especializada | Agende pelo WhatsApp",
  description:
    "Transforme seu sorriso e sua autoestima com a Dra Catarina Rodrigues. Tratamentos humanizados para um sorriso natural e saudável. Entre em contato pelo WhatsApp.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="custom-bg">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
