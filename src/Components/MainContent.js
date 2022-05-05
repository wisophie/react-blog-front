import React from 'react'
import styled from 'styled-components';
import CtaButton from './CtaButton';

import SmallHeading from './SmallHeading';
// import blockchain from '../img/bchain.png';
import { useTrail, animated } from "react-spring";

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
                    {/* <img src={blockchain} alt="" /> */}
                </div>
            </div>
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
        
        .left{
            border:1px solid red;
            display: flex;
            justify-content: center;
            flex-direction: column;
            font-size:1.3vw;
            .ptext{
                font-size:1.0vw;
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
            width:100%;
            height:100%;
            background:pink;
            border:1px solid red;
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
            max-height:32%;
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
