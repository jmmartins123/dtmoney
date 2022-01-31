import Modal from 'react-modal';
import {ContainerModal, TransactionTypeContainer, RadioBox} from '../NewTransactionModal/style';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {api} from '../../services/api';
import {useState, FormEvent} from 'react';
import { setEnvironmentData } from 'worker_threads';
import { isNumberObject } from 'util/types';
import { stringify } from 'querystring';
import { useTransaction } from '../../hooks/useTransaction';


interface NewTransactionModal{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModal) {
  const {createTransaction} = useTransaction();

  const[title, setTitle] = useState('');
  const[amount, setAmount] = useState(0);
  const[category, setCategory] = useState('');
  const[type, setType] = useState('');

  //uma função assíncroma retorna o passo a passo das tarefas escritas, ou seja, no caso abaixo,
  //minha função createTransaction será executada e caso esteja e tenha sifo true (sem erro), meu 
  //modal executará a função onRequestClose.

  //o assíncrona se basea em promesas (se essa função estiver correta, fecharei o modal)

  //as funções async são retornadas pelo await (aguarde)

   async function handleCreateNewTransaction (event: FormEvent) {
     event.preventDefault();

    await createTransaction({
         title,
         amount,
         category,
         type

     })

     setTitle('');
     setAmount(0);
     setCategory('');
     setType('');
     onRequestClose();
    }


    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        

            <button type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'>
                    <img src={closeImg} alt='Fechar modal'/>
            </button>

            <ContainerModal onSubmit={handleCreateNewTransaction}>
                 <h2>Cadastrar transação</h2>

                    <div className="label-float">
                        <input
                        type="text"
                        placeholder=" "
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        />
                        <label>Título</label>
                    </div>

                    <div className='unica'>
                        <div className="label-float">
                         <input
                            type="number"
                            placeholder=" "
                            value={amount}
                            onChange={event => setAmount(Number(event.target.value) )}
                         />
                            <label>Valor</label>
                        </div>
                    </div>

                    <TransactionTypeContainer>

                       <RadioBox
                          type="button"
                          onClick={() => { setType('deposit')}}
                          isActive={type==='deposit'}
                          activeColor="green">
                          <img src={incomeImg} alt='Entrada'/>
                          <span>Entrada</span>
                        </RadioBox>

                        <RadioBox 
                        type="button"
                        onClick={() => { setType('withdrawal')}}
                        isActive={type==='withdrawal'}
                        activeColor="red">
                        <img src={outcomeImg} alt='Saída'/>
                        <span>Saída</span>
                        </RadioBox>

                    </TransactionTypeContainer>
                    <div className="label-float">                     
                        <input
                        type="text"
                        placeholder=" "
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                        />
                        <label>Categoria</label>
                    </div>

                    <button type="submit">
                     Cadastrar
                    </button>

            </ContainerModal>
        </Modal>
    );
}