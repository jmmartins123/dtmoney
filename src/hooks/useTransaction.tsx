import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


//abaixo é um exemplode uma estrutura de tipagem.
interface Transaction { 
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
    type: string;
}

interface TransactionProviderProps{
    children:ReactNode; //react node é uma biblioteca que aceita no react qualquer tipo como retorno.
}

//funciona da mesma forma que a interface para tipagem. Omit = omite | Pick = quais eu quero
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


interface TransactionDuplo{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}



//criação de uma interface para informar o formato da informação que haverá no estado
const TransactionContext = createContext<TransactionDuplo>(
    {} as TransactionDuplo
    
    //o erro aconteceu pq o js não reconheceu a tipagem feita acima.
    //quando ocorrer situações como essa, é necessário colocar um objeto {} vazio
    //informando o tipo de tipagem. EX: {} as nomedapropriedade
);

// para que qualquer componente tenha acesso ao meu contexto,
//preciso colocar um carinha em volta dos componentes
// chamado Provider. Este carinho vem dentro do Context.

export function TransactionProvider({children}: TransactionProviderProps) {

    const[transactions, setTransactions] = useState<Transaction[]>([]); 
    //meu estado armazena uma key de transaction [] caso não tenha o [] 
    //minha key informa que possui somente 1 dado

     //a utilização da key é para informar uma referência
    
     useEffect(() => { 
        //retorna um efeito após a rederização 


        api.get('/transactions') 
        
        //fetch (biblioteca) acessa uma API
        //then = então | reponse = transforma a resposta em...
        //.json é o formato padrão para as APIs

        .then(response => setTransactions(response.data.transactions))
        // console.log = mostre na tela x infomação

    },[]);


//uma função assíncroma retorna o passo a passo das tarefas escritas, ou seja, no caso abaixo,
  //minha função createTransaction será executada e caso esteja e tenha sifo true (sem erro), meu 
  //modal executará a função onRequestClose.

  //o assíncrona se basea em promesas (se essa função estiver correta, fecharei o modal)

  //as funções async são retornadas pelo await (aguarde)
   async function createTransaction(TransactionInput: TransactionInput){
  
    const response = await api.post('/transactions', {
        ...TransactionInput,
        createdAt: new Date(),
    }) 

    const {transaction} = response.data;

    setTransactions([
        ...transactions, //conceito de imutabilidade = recolhe as informações anteriores e adiciona a nova criação
        transaction,
    ]); 
}

    return(
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
//quando coloco chaves dupla {{}} significa que eu estou retornando mais de uma informação dentro de
//variável
}

export function useTransaction () {
    const context = useContext(TransactionContext)
    
    return context
}