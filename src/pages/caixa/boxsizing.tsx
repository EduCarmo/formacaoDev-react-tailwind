import Caixa from "@/components/Caixa";

export default function Boxsizing() {
    return (
        <div className="flex flex-col gap-2">
            <Caixa className="w-36">#1</Caixa>
            <Caixa className="
                w-36 h-36 
                box-content
                border-8 border-white"
            >
                #2
            </Caixa>
        </div>
    )
}