import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Front-End Insights',
  description: 'A Front-End Insights é uma newsletter semanal dedicada a fornecer conhecimentos valiosos sobre o mundo do desenvolvimento front-end.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <div className="flex min-h-screen flex-col items-center justify-between max-w-5xl mx-auto">
          <header className="flex items-center justify-between w-full py-10">
            <span className="text-2xl font-black cursor-default">INSIGHTS</span>
            <nav className="flex gap-10">
              <Link href="/">início</Link>
              <Link href="/about">sobre</Link>
              <Link href="/admin/subscribers">lista de inscritos</Link>
            </nav>
          </header>

          {children}

          <footer className="p-10">
            <p>Feito com Next.js 13.4</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
