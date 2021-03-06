import React from 'react'
import styled from 'styled-components';

function SmallHeading({ title, identifier }) {
    return (
        <SmallHeadingStyled>
            <h3 className={identifier}>{title}</h3>
        </SmallHeadingStyled>
    )
}

const SmallHeadingStyled = styled.div`
    h3{
        background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
        background-clip: text;
        display: inline-block;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        font-size:1.9vw;
        font-weight:700;
        @media (max-width:992px){
            font-size:1.3rem;
            
            }
    }
    
    
`;

export default SmallHeading;
