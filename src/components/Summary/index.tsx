import totalImg from '../../assets/total.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import { Container } from "./style";
import { useTransaction } from '../../hooks/useTransaction';


export function Summary() {
    const {transactions} = useTransaction();;

    //o reduce serve para atualizar os valores de cada item. Inserindo o valor inicial (callback inteiro = passar parâmetro) 
    //e atualiza a array final (total). 
    //acc = acumulador | cur = Valor Atual | index Atual = idx | Array original = src
    // estrutura para criação dos somatórios

    const summary = transactions.reduce((acc, transaction) => {
       
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong> -
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className='div_total'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.total)}</strong>
            </div>

        </Container>
    );
}