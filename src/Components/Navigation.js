import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
// import logo from '../img/logo2.png';
import { useSpring, a } from "@react-spring/web";
import { Link, useLocation } from "react-router-dom";

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
    const location = useLocation();
    console.log(location.pathname)
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
    //动态导航栏监听
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    //缓动动画监听
    useEffect(() => {
        const goback = document.getElementsByClassName('goback-btn2')[0]
        goback.addEventListener('click', function () {
            scrollTopSmooth(0);
        }, false);

        return () => goback.removeEventListener('click',
            function () {
                scrollTopSmooth(0);
            }, false);
    }, [])

    //动态logo监听
    useEffect(() => {
        const timeout = setTimeout(() => {
            // setIntervalId(newIntervalId);

            setCount(count => count + 1);
            set(flipped => !flipped)
            console.log(count)
        }, 1000);
        if (count > 1) {
            clearTimeout(timeout);
        }
        // return () => window.removeEventListener('scroll', handleScroll);
        return () => clearTimeout(timeout);
    })

    const handleScroll = (e) => {
        const header = document.getElementById('header')
        const navitems = document.getElementById('nav')
        const goback = document.getElementsByClassName('goback-btn2')[0]
        console.log(window.pageYOffset)
        // var sliderbarTop = window.pageYOffset;
        var sliderbarTop = window.scrollTop;
        if (window.pageYOffset >= 690 && location.pathname == '/home') { //if语句判断window页面Y方向的位移是否大于或者等于导航栏的height像素值
            header.style.backgroundColor = '#5577AA';
        } else if (window.pageYOffset >= 10 && window.pageYOffset < 400 && location.pathname !== '/home') {
            navitems.style.opacity = 0;
            navitems.style.visibility = 'hidden';
            goback.style.opacity = 0;
            goback.style.visibility = 'hidden';
        } else if (window.pageYOffset >= 400 && location.pathname !== '/home') {
            goback.style.opacity = 0.7;
            goback.style.visibility = 'visible';
        } else {
            navitems.style.opacity = 1;
            navitems.style.visibility = 'visible';
            header.style.backgroundColor = 'transparent';
        }
    }

    //缓动导航栏
    var scrollTopSmooth = function (position) {
        // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (cb) {
                return setTimeout(cb, 17);
            };
        }
        // 当前滚动高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // step
        var step = function () {
            var distance = position - scrollTop;
            scrollTop = scrollTop + distance / 5;
            if (Math.abs(distance) < 1) {
                window.scrollTo(0, position);
            } else {
                window.scrollTo(0, scrollTop);
                requestAnimationFrame(step);
            }
        };
        step();
    }




    // goback.style.visibility = 'hidden';


    return (
        <NavigationStyled id='header'>
            <div className='kuang'>
                <div className='logo'>

                </div>
                <Link to="/home" onClick={() => set(state => !state)} className='logos'>
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
                </Link>

                <ul className="nav-items" id='nav'>
                    <li>
                        <Link to="/home"> Home</Link>
                    </li>
                    <li>
                        <Link to="/blogArticles"> Articles</Link>
                    </li>
                    <li>
                        <Link to="/projects"> Projects</Link>
                    </li>
                    <li>
                        <a href="#">Activity</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <div className="primary-btn">GET CONNECTED</div>
                    <div className="primary-btn2">DISPLAY MORE</div>
                </ul>
                <div className="goback-btn2" >BACKTOP</div>
            </div>

        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
  /* background-color:transparent; */
   position:fixed;
   width: 100%;
   z-index:10;
  
.kuang{
    
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 80%;
    height: 100%;
    margin:0 auto;
    /* border:1px solid red; */
    @media (max-width:992px) {
        .goback-btn2{
            /* transition: 0.3s; */
            opacity:0;
            display:none;
        }
        li{display: none;}
        .primary-btn{
            display: none;
       }
       .primary-btn2{
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
   @media (min-width:992px) {
    .goback-btn2{
    position:fixed;
    width:130px;
    height:50px;
    line-height:50px;
    text-align:center;
    top:90vh;
    left:73vw;
    background-color:#fff;
    color:black;
    border-radius:25px;
    cursor:pointer;
    transition: 0.3s;
    
    visibility:hidden;
}
    .nav-items{
       
       display: flex;
       align-items: center;
       transition:0.3s;
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
       .primary-btn2{display: none;}
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

}  

`;

export default Navigation;
