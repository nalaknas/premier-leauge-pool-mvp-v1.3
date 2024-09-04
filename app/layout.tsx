import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from './components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Premier League Pick \'Em League',
  description: 'Compete with friends and fans worldwide in predicting Premier League results!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}