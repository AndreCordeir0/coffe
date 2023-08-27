import header_style from './../app/style/header.module.css';
import coffee_image from './../../public/coffee_image.png';
import { CSSProperties } from 'react';


export function Header(){
    const style:CSSProperties = {
        backgroundImage:`url(${coffee_image.src})`,
        height:'100%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        padding:'20px',
        objectFit:'cover',
        minHeight:'800px',
        paddingLeft:'64px'
    };
    
    return (
        <>
            <div className={`${header_style.header_container}` } style={style}>
                <div className='flex flex-row justify-between'>
                    <label className={`${header_style.title_header} text-5xl`}>
                        Coffe Shops Tia Rosa
                    </label>
                    <div>
                        <ul className='flex flex-row gap-4 text-lg'>
                            <li className='cursor-pointer'>
                                Início
                            </li>
                            <li className='cursor-pointer'>
                                Menu
                            </li>
                            <li className='cursor-pointer'>
                                Sobre nós
                            </li>
                            <li className='cursor-pointer'> 
                                Contatos
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pt-32 flex flex-col gap-3'>
                    <label className='text-xl'>Comece bem o seu dia com</label>
                    <label className={`${header_style.title_header} text-9xl`}>Café</label>
                    <label className={`${header_style.subtitle} text-xl`}>
                        O melhor é começar o dia com uma xícara de café. Descubra os
                        melhores sabores de café. Nós fornecemos o melhor
                        para nossos clientes.
                    </label>
                </div>
            </div>
           
        </>
    )
}