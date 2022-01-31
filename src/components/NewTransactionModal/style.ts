import styled from "styled-components";
import { darken, transparentize } from "polished"; //usado para modificar uma cor no css

export const ContainerModal = styled.form`

    h2{
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
      
    }
    
    .label-float {
        position: relative;
        padding-top: 13px;
    }

    .label-float input {
        border: 1px solid lightgrey;
        border-radius: 0.25rem !important;
        outline: 0;
        width: 100%;
        padding: 1rem 1.5rem;
        font-size: 1rem;
        transition: 0,2s;
        -webkit-transition: .1s;
        -moz-transition: .1s;
        -webkit-appearance: none;

    }

    .unica{
        margin-top: 0.95rem;
      
    }

    .label-float input:focus {
        border: 1px solid #5429CC;
    }

    .label-float input::placeholder {
        color: transparent;
    }

    .label-float label {
        pointer-events: none;
        position: absolute;
        top: calc(50% - 12px);
        left: 15px;
        padding: 0.32rem;
        transition: all .1s linear;
        -webkit-transition: all .1s linear;
        -moz-transition: all .1s linear;
        background-color: white;
        color:var(--text-body);
        box-sizing: border-box;
    }

    .label-float input:focus+label,
    .label-float input:not(:placeholder-shown)+label {
        font-size: 0.85rem;
        top: 0;
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter:brightness(0.9);
        }
    }

`;

interface TransactionTypeContainerProps{
    isActive: boolean;
}

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap: 0.5rem;

`;

interface RadioBoxProsp {
    isActive: boolean; //significa que possuo mais de uma condição dentro desta função.
    activeColor: 'green' | 'red'; //se eu colocar string eu aviso ao meu browser que eu posso passar qualquer informação. O caracter "|" separa duas ou mais informações permitidas.
}

const color ={
    green:'#33CC95', //não é permitido colocar ";" no css quando lidamos com Javascript.
    red: '#e52e4d'
}

//só é possível passar uma propos no css, quando utlizarmos o styled-components e quissermos modificar somente uma informação.
//Ou seja, quando utilizamos propos no css, colocamos uma condição para tais estilizações.
//é necessário a criação de uma interface para informar que minha props possui como dependência x e y dados.

export const RadioBox = styled.button <RadioBoxProsp>`   
     height: 4rem;
     border: 1px solid #d7d7d7;
     border-radius: 0.25rem;
     margin-top: 0.90rem;
                 
     background: ${(props) => props.isActive ? transparentize (0.8, color[props.activeColor]) : 'transparent'};
     
     //Essa condição será aplicada somente para o background da minha variável RadioBox.
     //minha propriedade props informa (condição) que se minha props.isActive estiver ativa, retorna props.activeColor (retorna minha cor referente a minha seleção) : (senão) 'transparent' (valor false)

     display: flex;

     align-items: center;
     justify-content: center;

     transition: 0.2s;

        &:hover{
         border-color:${darken(0.2,'#d7d7d7')};
        }

     img{
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
    
`;