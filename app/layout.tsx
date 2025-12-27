export const metadata = {
  title: "SWAR",
  description: "Voice-first AI education platform for rural India"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
