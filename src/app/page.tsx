'use client'

import Descricao from '@/components/Descricao'
import Diferenciais from '@/components/Diferenciais'
import Footer from '@/components/Footer'
import  Header  from '@/components/Header'
import Shop from '@/components/Shop'

/**
 * Parte principal da aplicação onde contém todos os elementos.
 * @returns 
 */
export default function Home() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="flex min-h-screen flex-col pt-7" >
        <Descricao />
        <Shop />
        <Diferenciais />
        <Footer />
      </main>
    </>
  )
}
