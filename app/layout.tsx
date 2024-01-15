import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const font = IBM_Plex_Sans({ subsets: ['latin'], weight: '400'})

export const metadata: Metadata = {
  title: 'bibeats',
  description: 'Your music player.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
