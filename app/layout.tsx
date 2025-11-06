import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dinosaur Counting Game',
  description: 'Learn to count with cute dinosaurs!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
