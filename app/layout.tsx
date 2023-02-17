import './globals.css'
import { Josefin_Sans } from '@next/font/google'
import { Footer, Header, SubHeader } from '@/components'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-josefin'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={josefin.variable} >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>

          <SubHeader />
          <Header />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  )
}
