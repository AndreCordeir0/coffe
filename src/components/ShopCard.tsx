import Image from 'next/image';
import Botao from './Botao';


interface IShopCard {
    cardName:string,
    price:string,
    src:string,
    alt:string,
    width?:number,
    height?:number
}


export default function ShopCard(props:IShopCard){

    const style = {
        color: 'var(--coffee, #603809)',
        fontFamily: 'Playfair Display',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    }
    const style2 = {
        color: 'var(--coffee, #603809)',
        fontFamily: 'Playfair Display',
        fontStyle: 'normal',
        lineHeight: 'normal',
        fontWeight: '500',

    }
    return(
        <div className='flex flex-col items-center w-60 bg-amber-50 border-amber-100 border-2'>
            <Image src={props.src} alt={props.alt} width={280} height={100}/>
            <div className='flex flex-col items-center gap-1 pt-2 pb-8 relative'>
                <label style={style}>{props.cardName}</label>
                <label style={style2}>Café 50% | Leite 50%</label>
                <label style={style}>R${props.price}</label>
                <div className='absolute top-24'>
                    <Botao {...{label:'Comprar'}}/>
                </div>
            </div>
        </div>
    )
}

