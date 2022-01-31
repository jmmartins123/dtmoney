import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal/Index";
import { TransactionProvider } from "./hooks/useTransaction";

Modal.setAppElement('#root'); //apenas por questão de acessibilidade

export function App() {

  const[isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); //set funciona para alterar a função de uma variável.

  //handle é uma identificação de quando o usuário irá clicar em um botão.
  
  function handleOpenNewTransactionModal (){ 
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

//eu posso utilizar o "." para acessar uma propriedade se antes a referência for um objeto.

  return (
    <TransactionProvider>
        <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/> 

        <Dashboard /> 

        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseTransactionModal}
        />

        <GlobalStyle />
      
    </TransactionProvider>
  );
}
