import shop_style from './../app/style/shop.module.css';
import cappucino_image from './../../public/cappucino.png';
import chai_latte_image from './../../public/chai_latte.png';
import expresso_image from './../../public/expresso.png';
import macchiato_image from './../../public/macchiato.png';
import ShopCard from './ShopCard';

interface IShopCard {
    id:number;
    cardName:string;
    price:string;
    src:string;
    alt:string;
    width?:number;
    height?:number;
}


export default function Shop(){
    const cards:IShopCard[] = [
        {
            id:1,

            cardName:'Cappuccino',
            price:'6,00',
            src:cappucino_image.src,
            alt:'Cappuccino'
        },
        {
            id:2,

            cardName:'Chai Latte',
            price:'12,00',
            src:chai_latte_image.src,
            alt:'Chai Latte'
        },
        {
            id:3,

            cardName:'Macchiato',
            price:'14,00',
            src:macchiato_image.src,
            alt:'Macchiato'
        },
        {
            id:4,
            cardName:'Expresso',
            price:'3,00',
            src:expresso_image.src,
            alt:'Expresso'
        },
    ]
    return(
        <div>
            <div className='flex flex-col items-center'>
                <label className={`text-amber-900 font-bold text-4xl`}>
                    Desfrute de uma nova mistura de estilo de café
                </label>
                <label className={`${shop_style.main_label}`}>
                    Explore todos os sabores de café conosco.
                    Sempre há uma nova xícara que vale a pena experimentar
                </label>
            </div>

            <div className='pt-3'>
                <ul className='flex items-center justify-evenly flex-wrap gap-7'>
                    {
                        cards.map((card)=>{
                            return(
                                <li key={card.id}>
                                    <ShopCard {
                                        ...card}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}