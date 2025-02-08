import Caixa from "@/components/Caixa";

export default function Inicial() {
    return (
        <div className="
            p-7 gap-2.5 grid
            grid-cols-3
        ">
            <Caixa className="row-span-2">#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>
            {/* <Caixa>#4</Caixa> */}
            <Caixa className="col-span-2">#5</Caixa>
            {/* <Caixa>#6</Caixa> */}
            <Caixa className="col-span-2">#7</Caixa>
            {/* <Caixa>#8</Caixa> */}
            <Caixa>#9</Caixa>
        </div>
    )
}