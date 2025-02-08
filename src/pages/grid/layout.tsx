import Caixa from "@/components/Caixa";
import Grid from "@/components/layout/Grid";

export default function GridLayout() {
    return (
        <Grid cols={3} semEspaco sm={2}>
            <Caixa>#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>
            <Caixa>#4</Caixa>
            <Caixa>#5</Caixa>
            <Caixa>#6</Caixa>
            <Caixa>#7</Caixa>
            <Caixa>#8</Caixa>
            <Caixa>#9</Caixa>
        </Grid>
    )
}