import '../styles/globals.css'
import { Poppins } from 'next/font/google'

export const poppins = Poppins({ subsets: ['latin'], weight:["800"]})

export const metadata = {
  title: "Yahir Moreno Barajas",
  description: "The second version of my portfolio"
}

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
