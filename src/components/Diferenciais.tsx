import branding_watermark from './../../public/badge-1.svg';
import best_price from './../../public/best-price-1.svg';
import coffe_beans from './../../public/coffee-beans-1.svg';
import coffe_cup from './../../public/coffee-cup-1.svg';
import coffee_blast_right from './../../public/coffee_blast_right.png';
import Image from 'next/image';
import shop_style from './../app/style/shop.module.css';





interface IDiferenciais {
    mainLabel:string;
    subTitle:string;
    src:string;
}

export default function Diferenciais(){

    const cards:IDiferenciais[] = [
        {
            mainLabel:'Grãos divinos',
            subTitle:'',
            src:''
        },
        {
            mainLabel:'Alta qualidade',
            subTitle:'',
            src:''
        },
        {
            mainLabel:'Extraordinario',
            subTitle:'',
            src:''
        },
        {
            mainLabel:'Melhores preços',
            subTitle:'',
            src:''
        },
    ]
    return (
        <div className='pt-20'>
            <div className='flex flex-col items-center relative'>
                <label className='text-amber-900 font-bold text-4xl'>Por que somos diferentes?</label>
                <label className={`${shop_style.main_label}`}>Nós não fazemos apenas o seu café, nós fazemos o seu dia!</label>
                <Image className={`${shop_style.image} absolute right-0`} src={coffee_blast_right.src} alt={""} width={300} height={100}/>
            </div>
            <div>
            </div>
        </div>
    )
}