import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manel Bannouri',
  description: 'Portfolio of Manel Bannouri',
  // openGraph: {
  //   title: 'Manel Bannouri',
  //   description: 'Portfolio of Manel Bannouri',
  //   url: 'https://manelbannouri.com',
  //   siteName: 'Manel Bannouri',
  //   images: [
  //     {
  //       url: '/assets/og-image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Manel Bannouri - Professional Portrait',
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
