import Links from '@/components/Links'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'

export const poppins = Poppins({ subsets: ['latin'], weight:["800"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
