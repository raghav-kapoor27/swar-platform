import "./globals.css"

export const metadata = {
  title: "SWAR",
  description: "Voice-first AI system for inclusive education"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
