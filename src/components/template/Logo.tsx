import { IconBrandTailwind } from "@tabler/icons-react";

interface LogoProps { 
    ClassName?: string
}

export default function Logo(props: LogoProps) {
    return (
        <div className={`flex items-center gap-2 text-zinc-700 dark:text-zinc-400 ${props.ClassName ?? ''}`}>
            <IconBrandTailwind size={40} stroke={1}/>
            <span>Tailwind Com React</span>
        </div>
    )
}