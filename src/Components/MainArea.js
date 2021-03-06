import React from 'react';
import styled from 'styled-components';
// import business from '../img/marketing.mp4';
import circles from '../img/circles.svg';
import { InnerLayout2 } from '../Layouts'
import MainContent from './MainContent';

function MainArea() {
    return (
        <MainAreaStyled>
            {/* <video src={business} muted playsInline autoPlay loop></video> */}
            {<img src={circles} className="overlay" alt='' />}
            <InnerLayout2>
                <MainContent />
            </InnerLayout2>
        </MainAreaStyled>
    )
}

const MainAreaStyled = styled.header`
    width: 100%;
    height: 90vh;
    /* padding-top:10vh; */
    position: relative;
    overflow: hidden;
    /* border:1px solid red; */
    &::after{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:100%;
        background:linear-gradient(#ee9ca7,#ee9ca7);
        clip-path:circle(25% at left 126.4%);
        z-index:-1;
   
    }
   
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -300px;
        
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
    }
`;

export default MainArea;
