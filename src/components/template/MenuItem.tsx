import Link from "next/link"
import React from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */
interface MenuItemProps {
    icone: any,
    texto: string,
    url: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url}>
            <div className="
            flex items-center 
            gap-2 px-3 py-2  rounded-md
            text-zinc-700 dark:text-zinc-300 
            dark:hover:bg-black hover:bg-zinc-200
        ">
                <span>{React.cloneElement(props.icone, {
                    stroke: 1
                }
                )}</span>
                <span className="text-sm">{props.texto}</span>
            </div>
        </Link>
    )
}