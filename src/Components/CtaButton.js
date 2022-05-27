import React from 'react'
import styled from 'styled-components';

function CtaButton({ name }) {


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
    const goTag = () => {

        window.scrollTo(0, 1000)
    }
    return (
        <CtaButtonStyled onClick={() => scrollTopSmooth(800)}>
            {name}
        </CtaButtonStyled>
    )
}

const CtaButtonStyled = styled.a`
    text-transform: uppercase;
    background: linear-gradient(130deg, #395FF6 , #EB3FA9);
    padding: .9rem 1.5rem;
    border-radius: 8px;
    font-size: 1.6vw;
    
    font-weight: 500;
    cursor: pointer;
    transition: all .4s ease-in-out;
    /* margin-top: 1rem; */
    @media (min-width:992px) {
        font-size: 1.1rem;
        
    }
    @media (max-width:992px) {
       
        &:last-child{
        margin-top: 1rem;
    }
    }
    &:first-child{
        margin-top: 0;
        margin-right: 1.2rem;
    }
    
    &:hover{
        transition: all .3s ease-in-out;
        background: linear-gradient(120deg,  #EB3FA9, #395FF6);
    }
`;
export default CtaButton;
