import Descricao from '@/components/Descricao'
import { Header } from '@/components/Header'


export default function Home() {
  return (
    <>
      <head>
        <Header/>
      </head>
      <main className="flex min-h-screen flex-col items-center justify-between pt-7">
        <Descricao />
      </main>
    </>
  )
}
