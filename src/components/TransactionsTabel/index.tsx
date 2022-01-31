import { useTransaction } from "../../hooks/useTransaction";
import { api } from "../../services/api";
import { ContainerTable } from "./style";


export function Tabela() {
    const {transactions} = useTransaction();;

    return(
        <ContainerTable>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>                 
                    {transactions.map(transaction =>{ 
                     
                     //estrutura que contém informações do estado da table e suas formatações

                     return(
                        <tr key={transaction.id}>  
                         <td>{transaction.title}</td>
                         <td className={transaction.type}> 
                             {new Intl.NumberFormat('pt-BR', {
                                 style: 'currency',
                                 currency: 'BRL'
                             }).format(transaction.amount)}
                             </td>
                         <td>{transaction.category}</td>
                         <td>{new Intl.DateTimeFormat('pt-BR') //por padrão do DateFormat só consegue trabalhar com data. Ele não consegue converter uma string.
                         .format(new Date(transaction.createdAt))}</td>
                        </tr>

                        //estrutura padrão para transformaçao de uma string em um data e/ou moeda.
                        //necessário seguir essa estrutura para que a transformação não ocorra erro.
                     ); 
                        
                    })}
                </tbody>

            </table>
        </ContainerTable>
    );
}