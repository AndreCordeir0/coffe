import badge from './../../public/badge-1.svg';
import best_price from './../../public/best-price-1.svg';
import coffe_beans from './../../public/coffee-beans-1.svg';
import coffe_cup from './../../public/coffee-cup-1.svg';
import coffee_blast_right from './../../public/coffee_blast_right.png';
import Image from 'next/image';
import shop_style from './../app/style/shop.module.css';
import { CSSProperties } from 'react';





interface IDiferenciais {
    mainLabel:string;
    subTitle:string;
    src:string;
    backgroundColor?:string;
}

export default function Diferenciais(){
    const style = {
        color: 'var(--coffee, #603809)',
        fontFamily: 'Playfair Display',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    }
    const style2:CSSProperties = {
        color: 'var(--coffee, #603809)',
        fontFamily: 'Playfair Display',
        fontStyle: 'normal',
        lineHeight: 'normal',
        fontWeight: '500',
        maxWidth: '189px',
        textAlign:'center'
    }

    const cards:IDiferenciais[] = [
        {
            mainLabel:'Grãos divinos',
            subTitle:'Grãos que fornecem Sabor fantástico', 
            src:coffe_beans,
            backgroundColor:'bg-amber-100'
        },
        {
            mainLabel:'Alta qualidade',
            subTitle:'Nós fornecemos a mais alta qualidade',
            src:badge
        },
        {
            mainLabel:'Extraordinario',
            subTitle:'Café como você nunca provou',
            src:coffe_cup
        },
        {
            mainLabel:'Melhores preços',
            subTitle:'Preços que cabem no seu bolso',
            src:best_price
        },
    ]
    return (
        <div className='pt-24'>
            <div className='flex flex-col items-center relative'>
                <label className='text-amber-900 font-bold text-4xl'>Por que somos diferentes?</label>
                <label className={`${shop_style.main_label}`}>Nós não fazemos apenas o seu café, nós fazemos o seu dia!</label>
                <Image className={`${shop_style.image} absolute right-0`} src={coffee_blast_right.src} alt={""} width={300} height={100}/>
            </div>
            <div className='flex items-center justify-evenly flex-wrap gap-7 pt-14'>
                {cards.map((card,i)=>{
                    return(
                        <div key={i} className= {`flex flex-col w-60 bg-amber-50 border-amber-100 border-2 justify-center items-center gap-2 ${card.backgroundColor}`} style={{minHeight:'240px'}}>
                            <Image src={card.src} alt={""} width={100} height={100}/>
                            <label style={style}>{card.mainLabel}</label>
                            <label style={style2}>{card.subTitle}</label>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}