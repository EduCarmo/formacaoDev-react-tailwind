interface GridProps {
    cols?: number
    gap?: number
    sm?: number
    semEspaco?: boolean
    children: React.ReactNode
}

export default function Grid(props: GridProps) {
    return (
        <div className={`
            grid grid-cols-${props.cols ?? 1}
            ${props.semEspaco ? '' : 'gap-3'}
            ${props.sm ? `sm:grid-cols-${props.sm}` : ''}
        `}>
            {props.children}
        </div>
    )
}