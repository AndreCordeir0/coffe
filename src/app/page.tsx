'use client'

import Descricao from '@/components/Descricao'
import Diferenciais from '@/components/Diferenciais'
import  Header  from '@/components/header'
import Shop from '@/components/Shop'


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
      </main>
    </>
  )
}
