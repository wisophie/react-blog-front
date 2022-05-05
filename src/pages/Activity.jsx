import React from 'react'
import projectspic from '../img/img-8.jpg';
import styled from 'styled-components';
export default function activity() {
  return (
    <ActivityStyled>
      <div className='Activity'><h1>Activity</h1></div>
    </ActivityStyled>
  )
}

const ActivityStyled = styled.div`
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
  .Activity {
    display: flex;
  /* align-items: center;  */
  justify-content: center;
  position:relative;
  height: 100vh;
  font-size: 3rem;
  background-image: url(${projectspic});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  h1{
        margin-top:20%;
  }
}

`;