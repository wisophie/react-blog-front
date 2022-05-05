import React from 'react'
import projectspic from '../img/img-4.jpg';
import styled from 'styled-components';
export default function Contact() {
  return (
    <ContactStyled>
      <h1 className='Contact'>Contact</h1>
    </ContactStyled>

  )
}

const ContactStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    
    padding-top:10vh;
   
    button{
      width:10px;
      height:10px;
      background-color: #fff;
    }
  .Contact {
    display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 3rem;
  background-image: url(${projectspic});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
}
`