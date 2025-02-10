import { useState } from "react"
import Logo from "./Logo"
import Menu from "./Menu"
import UsuarioInfo from "./UsuarioInfo"
import { IconMoon, IconSun } from "@tabler/icons-react"

interface PaginaProps {
    children: React.ReactNode
}

export default function Pagina(props: PaginaProps) {

    const [tema, setTema] = useState<'dark' | ''>('dark')

    function alterarTema() {
        setTema(tema === '' ? 'dark' : '')
    }

    const usuario = {
        nome: 'Franklie Sullivan',
        email: 'frankie@untitledui.com',
        imagemUrl: 'https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38131.jpg'
    }

    return (
        <div className={`flex h-screen relative text-black dark:text-white   ${tema}`}>
            <aside className="
                flex flex-col 
                bg-white  dark:bg-zinc-900 
                w-80
            ">
                <Logo ClassName="pt-7 px-7" />
                <Menu className="pt-3.5 px-7 pb-28 overflow-auto w-80" />
                <div className="fixed bottom-0 bg-white  dark:bg-zinc-900 ">
                    <hr className="mx-7 border-zinc-400 dark:border-zinc-700" />
                    <UsuarioInfo {...usuario} className="p-7" />
                </div>
            </aside>
            <div className="
                p-7 flex-1
                bg-zinc-100  dark:bg-black               
            ">
                {props.children}
            </div>
            <div className="absolute right-2 top-4">
                <button onClick={alterarTema}>
                    {tema === 'dark' ? <IconSun className="text-white" /> : <IconMoon className="text-black"/>}
                </button>
            </div>
        </div>
    )
}