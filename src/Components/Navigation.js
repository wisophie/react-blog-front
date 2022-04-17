import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
// import logo from '../img/logo2.png';
import { useSpring, a } from "@react-spring/web";

// let timer = null;
// function useCountdown(initialCount) {
//     const [sec, setSec] = useState(initialCount);
//     const [flipped, set] = useState(false)
//     timer = setInterval(() => {
//         set(state => !state);
//     }, 1000);

//     if (sec > 2) {
//         clearInterval(timer);
//         console.log(sec)
//     }

//     return sec;
// }

function Navigation() {
    const [count, setCount] = useState(0);
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    // let myInterval = null;

    // const interval = () => {
    //     myInterval = setInterval(() => {
    //         console.log(sec)
    //         if (sec > 5) {
    //             clearInterval(myInterval)
    //         }
    //         setSec(sec + 1);
    //     }, 1000)
    // }

    useEffect(() => {


        const timeout = setTimeout(() => {
            // setIntervalId(newIntervalId);
            console.log(count)
            setCount(count => count + 1);
            set(state => !state)
        }, 1000);
        if (count > 1) {
            clearTimeout(timeout);
        }
        return () => clearTimeout(timeout);
    })


    return (
        <NavigationStyled>
            <div className="logo">
                {/* <img src={logo} alt="" /> */}
            </div>
            <div onClick={() => set(state => !state)} className='logos'>
                <a.div
                    className='logos back'
                    style={{ opacity: opacity.to(o => 1 - o), transform }}
                />
                <a.div
                    className='logos front'
                    style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                    }}
                />
            </div>
            <ul className="nav-items">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">FAQs</a>
                </li>
                <li>
                    <a href="#">Activity</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <div className="primary-btn">GET CONNECTED</div>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items{
        display: flex;
        align-items: center;
        li{
            margin: 0 0.5rem;
            padding:0 0.4rem;
            border-radius:0.9rem;
            transition: 0.3s ease;
            &:hover{
                background-color:#ccc;
                padding:0.2rem 0.4rem;
              color:#000;
            }
        }
        .primary-btn{
            margin-left: 3rem;
            background-color:rgba(57, 95, 246, 0.6);
            padding: .6rem 1.3rem;
            border-radius: 70px;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                background-color:rgba(57, 95, 246, 1);
            }
        }
    }
    .logo{
         width: 60px;
        img{
            width: 60px;
            
        }
        z-index: 1;
    }
    .logos {
  position: absolute;
  cursor: pointer;
  will-change: transform, opacity;
  width: 60px;
  height: 51px;
  
  img{
      width: 60px;
      /* box-shadow:0 5px 15px rgba(0,0,0,0.2); */
  }
  /* border: 1px solid red; */
  z-index: 10;
}
        .back,
.front {
  background-size: cover;
  /* box-shadow:0 5px 15px rgba(0,0,0,0.2); */
}

.back {
  background-image: url(http://rac8w9hi8.hd-bkt.clouddn.com/logo2_1.png);
}

.front {
    background-image: url(http://rac8w9hi8.hd-bkt.clouddn.com/logo2.png);
}
    
`;

export default Navigation;
