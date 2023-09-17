
import { CSSProperties, Dispatch, SetStateAction, useState } from 'react';
import coffee_image from './../../public/coffee_image.png';
import header_style from './../app/style/header.module.css';



/**
 * Sidebar responsivo
 * @param setSidebarOpen Função para fechar o sidebar
 * @returns 
 */
function SidebarMenu(setSidebarOpen:Dispatch<SetStateAction<boolean>>){
    function handleClick() {
        setSidebarOpen(val => !val);
    }
    return(
        <>
            <div className='fixed h-full w-3/5 flex flex-col z-20 bg-amber-800' style={{left:'0px',top:'0px'}}>
                <div className='h-max flex flex-row justify-between p-4 text-white'>
                        <ul className='flex flex-col gap-5 text-lg' >
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
                        <button onClick={handleClick} className='self-start pr-5'>
                            <svg width="100%" height="30px" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.657 6.34375L12.0001 12.0006M12.0001 12.0006L6.34326 17.6575M12.0001 12.0006L17.657 17.6575M12.0001 12.0006L6.34326 6.34375" stroke-width="2" stroke="currentColor"></path></svg>
                        </button>
                        
                </div>
            </div>
        </>
    )
}
/**
 * Header da aplicação
 * @returns 
 */
export default function Header(){
    const [isSideBarOpen, setSidebarOpen] = useState<boolean>(false);
    function handleClick() {
        setSidebarOpen(val => !val);
    }

    const style:CSSProperties = {
        backgroundImage:`url(${coffee_image.src})`,
        height:'100%',
        backgroundSize: 'cover',
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
                    <div className={header_style.header_botoes}>
                        <ul className='flex flex-row gap-4 text-lg' >
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
                        <button
                            onClick={handleClick}
                        >
                            <svg width="calc(1rem * 1.2500)" height="calc(1rem * 0.8750)" viewBox="0 0 20 14" fill="none" aria-hidden="true" focusable="false"><path d="M7 1C7 0.448 7.448 0 8 0H19C19.552 0 20 0.448 20 1C20 1.552 19.552 2 19 2H8C7.448 2 7 1.552 7 1ZM19 6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H19C19.552 8 20 7.552 20 7C20 6.448 19.552 6 19 6ZM12 12H1C0.448 12 0 12.448 0 13C0 13.552 0.448 14 1 14H12C12.552 14 13 13.552 13 13C13 12.448 12.552 12 12 12Z" fill="currentColor"></path></svg>
                        </button>
                        
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
           { isSideBarOpen && SidebarMenu(setSidebarOpen)}
        </>
    )
}