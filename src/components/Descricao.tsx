import Botao from "./Botao";
import coffe_image from './../../public/stylized-cup-coffee.png';
import Image from 'next/image';
import coffe_blast_left from './../../public/coffee_blast_left.png';

import descricao_style from './../app/style/descricao.module.css';

export default function Descricao(){
    return (
        <div className="w-full flex justify-between items-center">
            <div className="items-center">
                <div className="p-5 pl-16 pb-0 flex flex-col gap-5">
                    <label className="text-amber-900 font-bold text-4xl">Descubra o melhor café</label>
                    <label className={`${descricao_style.descricao}`}>Coffe Shops Tia Rosa é uma cafeteria que oferece um café de qualidade que ajuda a impulsionar sua produtividade e melhorar seu humor. Tomar uma xícara de café é bom, mas tomar uma xícara de café de verdade é ainda melhor. Não há dúvidas de que você apreciará este café mais do que qualquer outro que já tenha provado.</label>
                    <Botao {...{label:'Ler sobre'}}/>
                </div>
                <div>
                    <Image src={coffe_blast_left.src} alt={""} width={300} height={100}/>
                </div>
            </div>
            <div className={`${descricao_style.coffe_image} pr-16`}>
                <Image src={coffe_image.src} alt={""} width={500} height={100}/>
            </div>
        </div>
    )
}