import React, { useEffect, useState, createContext, useContext } from 'react'
import styled from 'styled-components';
import projectspic from '../img/img-2.jpg';
import iphone from '../img/browser_big.jpg';
const numContext = createContext()
// function Sub() {
//   const { num, setNum } = useContext(numContext)
//   const [num1, setNum1] = useState(9)
//   useEffect(() => {
//     const timeout = setTimeout(() => {

//       setNum(num + 1)
//       // setNum(prevNum => {
//       //   console.log(prevNum)
//       //   return prevNum

//     }, 1000)
//     if (num > 2) {
//       clearTimeout(timeout)
//     }

//     // return () => clearTimeout(timeout)
//   }, [num])



//   function fn() {
//     const time2 = setInterval(() => {
//       setNum1(num1 => {
//         console.log(num1 - 1);
//         if (num1 < 2) {
//           clearInterval(time2)
//         };
//         return num1 - 1
//       })

//     }, 1000)
//   }
//   return (
//     <ProjectsStyled>

//       <h2>{num}</h2>
//       <h2>{num1}</h2>
//       <button onClick={() => fn()}></button>

//     </ProjectsStyled>

//   )
// }


// function Father() {


//   return (
//     <ProjectsStyled>
//       <Sub />

//     </ProjectsStyled>

//   )
// }



export default function Projects() {

  const [num, setNum] = useState(0)

  return (
    <ProjectsStyled>
      {/* <numContext.Provider value={{ num, setNum }}>
        
      </numContext.Provider> */}
      <h1 className='Projects'>PROJECTS</h1>
      <div className='z' style={{ width: '500px', height: '850px' }}>
        <iframe className='iframe' width='425' height='600' src="http://www.wispw.com:8083" style={{ background: 'white', }} ></iframe>
      </div>

    </ProjectsStyled>
  )
}



const ProjectsStyled = styled.div`
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
  .Projects {
    display: flex;
  align-items: center;
  justify-content: center;
  height: 12vh;
  font-size: 5vw;
  background-image: url(${projectspic});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
}
.z{
        /* margin:0 auto; */
        background: url(${iphone}) no-repeat 0 0;
        border:1px solid transparent;
        .iframe{
            margin:0 auto;
            /* margin-top: 115px; */
            margin:115px 0 0 23px;
            /* border:1px solid red; */
        }
    }

`;