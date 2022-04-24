import React, { useEffect, useState, createContext, useContext } from 'react'
import styled from 'styled-components';


const numContext = createContext()
function Sub() {
  const { num, setNum } = useContext(numContext)
  const [num1, setNum1] = useState(9)
  useEffect(() => {
    const timeout = setTimeout(() => {

      setNum(num + 1)
      // setNum(prevNum => {
      //   console.log(prevNum)
      //   return prevNum

    }, 1000)
    if (num > 2) {
      clearTimeout(timeout)
    }

    // return () => clearTimeout(timeout)
  }, [num])



  function fn() {
    const time2 = setInterval(() => {
      setNum1(num1 => {
        console.log(num1 - 1);
        if (num1 < 2) {
          clearInterval(time2)
        };
        return num1 - 1
      })

    }, 1000)
  }
  return (
    <ProjectsStyled>

      <h2>{num}</h2>
      <h2>{num1}</h2>
      <button onClick={() => fn()}></button>

    </ProjectsStyled>

  )
}


function Father() {


  return (
    <ProjectsStyled>
      <Sub />

    </ProjectsStyled>

  )
}



export default function Projects() {

  const [num, setNum] = useState(0)

  return (
    <ProjectsStyled>
      <numContext.Provider value={{ num, setNum }}>
        <Father />
      </numContext.Provider>

    </ProjectsStyled>
  )
}



const ProjectsStyled = styled.div`
  position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100vh;
    padding-top:10vh;
    button{
      width:10px;
      height:10px;
      background-color: #fff;
    }

`;