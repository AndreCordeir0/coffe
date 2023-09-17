

/**
 * Footer da aplicação
 * utiliza uma constante para exibir os dados na tela
 * @returns retorna jsx element para renderização
 */
export default function Footer(){
    const footerContent = [
        {
            title: 'Sobre',
            links: ['Menu', 'Home', 'Sobre', 'Contato']
        },
        {
            title: 'Empresa',
            links: ['Como trabalhamos', 'Termos de serviço', 'Preços', 'FAQ']
        },
        {
            title: 'Contato',
            links: ['Rua do são nunca', '61900999222', 'tiarosa@gmail.com', 'www.tiarosa.com']
        },
    ]
    return (
        <div className="flex justify-evenly p-5 bg-amber-900 text-white mt-4">
            {footerContent.map(footer=>{
                return (
                    <div key={footer.title} className="flex flex-col gap-3">
                        <label className="font-bold text-lg">{footer.title}</label>
                        {footer.links.map(link=>{
                            return(
                                <div key={link} className="flex flex-col">
                                    <label className="cursor-pointer">{link}</label>
                                </div>
                            )
                        })}
                        
                    </div>
                )
            })}
            
        </div>
    )
}