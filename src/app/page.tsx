import Descricao from '@/components/Descricao'
import { Header } from '@/components/Header'
import Shop from '@/components/Shop'


export default function Home() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="flex min-h-screen flex-col pt-7">
        <Descricao />
        <Shop />
      </main>
    </>
  )
}
