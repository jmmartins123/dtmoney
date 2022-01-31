import { Summary } from "../Summary";
import { Tabela } from "../TransactionsTabel";
import { ContainerResumo } from "./style";



export function Dashboard() {
    return(
        <ContainerResumo> 
            <Summary /> 
            <Tabela/>
        </ContainerResumo>
    );
}