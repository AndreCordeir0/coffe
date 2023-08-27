import { ReactNode } from "react"
import botao_style from './../app/style/botao.module.css';

export default function Botao(props:IBotao){
    return(
        
        <button type="button" className={`${botao_style.botao} bg-orange-400 w-24 rounded-3xl h-8`}>
           { props.label }
        </button>
    )

}

interface IBotao {
    label: string | ReactNode
}