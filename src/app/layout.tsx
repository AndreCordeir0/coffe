import Head from 'next/head'
import './style/globals.css'
import icon from '../../public/coffee-cup-1.svg'

export const metadata = {
  title: 'Coffe Shops Tia Rosa',
  description: 'Landing page da Coffe Shops Tia Rosa'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
          {/* <link rel="icon" href={icon.src} sizes="10"/> */}

          <link href="https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap" rel="stylesheet" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
