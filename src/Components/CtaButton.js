import React from 'react'
import styled from 'styled-components';

function CtaButton({ name }) {
    return (
        <CtaButtonStyled>
            {name}
        </CtaButtonStyled>
    )
}

const CtaButtonStyled = styled.a`
    text-transform: uppercase;
    background: linear-gradient(130deg, #395FF6 , #EB3FA9);
    padding: .9rem 1.5rem;
    border-radius: 8px;
    font-size: 1.6vw;
    
    font-weight: 500;
    cursor: pointer;
    transition: all .4s ease-in-out;
    /* margin-top: 1rem; */
    @media (min-width:992px) {
        font-size: 1.1rem;
        
    }
    @media (max-width:992px) {
       
        &:last-child{
        margin-top: 1rem;
    }
    }
    &:first-child{
        margin-top: 0;
        margin-right: 1.2rem;
    }
    
    &:hover{
        transition: all .3s ease-in-out;
        background: linear-gradient(120deg,  #EB3FA9, #395FF6);
    }
`;
export default CtaButton;
