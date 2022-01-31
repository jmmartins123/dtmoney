import logoImg from '../../assets/logo.svg'
import { ContainerHeader, ContainerHeader_2 } from './style'


//foi necessário criar uma propriedade (props) no meu Header para jogá-lo dentro do meu app (onde roda minha aplicação)
//essa manobra é utiliza muitas vezes no react. Quando eu quiser jogar um componente que pertece a um conjunto já pré- estabelecido
//será necessário criar uma props atibuindo uma função {} e um parâmetro ()


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {


    return (
        <ContainerHeader>
            <ContainerHeader_2>
            <a href='http://localhost:3000/'><img src={logoImg} alt="dt money"></img></a>
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>
            </ContainerHeader_2>
        </ContainerHeader>
    )
}