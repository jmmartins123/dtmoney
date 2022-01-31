import styled from "styled-components";

//Campos de entrada | Saída | Total

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 2rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-tile);
        margin-top: 2rem;
        
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.div_total{
            background: var(--green);
            color: #fff;
        }

    }
`;