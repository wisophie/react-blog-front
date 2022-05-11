import React from 'react'
import styled from 'styled-components';
import CtaButton from './CtaButton';

import SmallHeading from './SmallHeading';
// import blockchain from '../img/bchain.png';
import { useTrail, animated } from "react-spring";
import { Carousel } from 'antd';
import res from '../img/res.jpg'

function MainContent() {
    // animation
    const animatedTexts = useTrail(5, {
        from: { opacity: 0, transform: "translateY(3em)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: {
            mass: 3,
            friction: 45,
            tension: 460,
        },
        // delay: 300,
    });
    // const contentStyle = {
    //     height: '360px',
    //     color: '#fff',
    //     lineHeight: '360px',
    //     textAlign: 'center',
    //     // background: '#364d79',
    // };

    return (
        <MainContentStyled >

            <div className="content">
                <div className="left">
                    <animated.div style={animatedTexts[0]}>
                        <SmallHeading title={'Full Responsive Web Design'} identifier={'Before'} />
                    </animated.div>

                    <animated.h1 style={animatedTexts[1]} className='font-bold'>
                        Hello! 我是潜心钻研的小严同学
                        The Best Place to Collect Thoughts <span className='GradientText'>学会像AI一样思考</span>
                    </animated.h1>
                    <animated.p style={animatedTexts[2]} className='ptext'>
                        这是一个人工智能时代，这里有UP主的想法和生活点滴。
                        这是一个全响应式的网站,功能依然在添加中,敬请期待。

                    </animated.p>
                    <animated.div style={animatedTexts[3]} className="btns-con">
                        <CtaButton name={'discover more'} />
                        <CtaButton name={'get help'} />
                    </animated.div>
                </div>
                <div className="right">
                    {/* <img src={res} alt="" /> */}
                    <Carousel autoplay>
                        <div className='Carouselone'>
                            <img src={res} ></img>
                            <h1>响应式网页设计 <br />
                                ----Responsive Web Design----</h1>

                        </div>
                        <div className='Carouseltwo'>
                            {/* <h3 style={contentStyle}>2</h3> */}
                        </div>
                        <div className='Carouselthree'>
                            {/* <h3 style={contentStyle}>3</h3> */}
                        </div>
                        <div className='Carouselfour'>
                            {/* <h3 style={contentStyle}>4</h3> */}
                        </div>
                    </Carousel>
                </div>
            </div >
        </MainContentStyled >
    )
}


const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    padding-top:10vh;
    border:1px solid red;
    .content{
        display: flex;
        /* display: grid;
        grid-template-columns: repeat(2, 1fr); */
        height: 100%;
        width:100%;
        .right{
            .Carouselone{
                position: relative;
                width: 100%;
                /* height: 100%; */
                /* display: flex;
                flex-flow: column; */
                padding-top: 67%;
                transition: all .4s ease-in-out;
                img{
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    display: block;
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                    max-height: 100%;
                    transition: all .4s ease-in-out;
                    object-fit: cover;
                    cursor:pointer;
                    &:hover{
                        transform: scale(1.05) ;
                    }
                }
                h1{
                    position: absolute;
                    top: 4%;
                    left:5%;
                    font-size:1.5rem;
                    color: #fff;
                   
                }
               
            }
        }
        .left{
            border:1px solid red;
            display: flex;
            justify-content: center;
            flex-direction: column;
            font-size:1.3vw;
            .ptext{
                font-size:0.9vw;
            }
            h1{
                padding: 1.8rem 0;
            }
            .btns-con{
                /* width: 70%; */
                display:flex;
                /* justify-content:space-between; */
                
                align-items: flex-start;
                margin-top: 3rem;
                border:1px solid red;
                
            }
        }
        .right{
            display:flex;
            justify-content: center;
            flex-direction: column;
            width:60%;
            height:100%;
            border:1px solid red;
            .ant-carousel{
                width:80%;
                margin:0 auto;
                border:1px solid red;
            }
            img{
                position: absolute;
                right: -11%;
                bottom: -1%;
                width: 60%;
            }
        }
        @media (max-width:992px) {
            flex-flow: column;
            flex-direction:column-reverse;
        width:100%;
            
        .left{
        font-size:1.1rem;
        max-height:76%;
        min-height:60%;
        /* justify-content:space-around; */
         .ptext{
                font-size:0.9rem;
                border:1px solid red;
            }
            .btns-con{
            flex-flow: column;
            margin-top: 2rem;
        }
        }
        
        .right{
            max-height:40%;
            width:100%;
            .ant-carousel{
                width:100%;
                height:300px;
                /* margin:0 auto; */
                border:1px solid red;
            }
        }
}

        
    }
    /* @media (min-width:992px) {
        .content{
            width:100%;
        }
        .left{
            font-size:2rem;
        }
        .btns-con{
            flex-flow: column;
        }
    } */

`;
export default MainContent;
