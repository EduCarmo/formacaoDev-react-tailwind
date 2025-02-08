interface TituloProps {
    principal?: string
    secundario?: string
    gradiente?: boolean
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col items-start">
            <h1 className={`
                text-3xl font-black
                ${props.gradiente?
                     'bg-gradient-to-r from-purple-500 to-yellow-500 text-transparent bg-cliptext bg-clip-text' : ''}    
            `}>
                {props.principal}
            </h1>
            <h2 className="text-sm font-light text-zinc-400">{props.secundario}</h2>
        </div>
    )
}