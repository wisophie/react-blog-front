import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import BlogsSection from './BlogsSection';
import ContactSection from './ContactSection';
import DemonstrationSection from './DemonstrationSection';
import GradientCardsSection from './GradientCardsSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';
import beianga from '../img/beianga.png';


function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Rank This Month'} subtitle={'All Projects'} />

                <SellerCard />

                <BlogsSection />
                <GradientCardsSection />
                <DemonstrationSection />
            </InnerLayout>
            <ContactSection />
            <footer>
                <p>Copyright ©Yan Li. All Rights Reserved</p>
                <p><a href="https://beian.miit.gov.cn">浙ICP备2022010356号-1</a></p>
                <div className="ga">
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33022602000595">
                        <img src={beianga} />
                        <p>浙公网安备33022602000595号</p>
                    </a>
                </div>
            </footer>
        </BodyContentStyled >
    )
}

const BodyContentStyled = styled.div`
	height:100vh;
    position:relative;
    /* border:2px solid red; */
    &::before{
        content:"";
        position:absolute;
        top:4%;
        left:0;
        width: 100%;
        height:100%;
        background:linear-gradient(#2193b0,#6dd5ed);
        clip-path:circle(24% at right 60%);
        /* z-index:10; */
       }
    &::after{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:100%;
        background:linear-gradient(#ee9ca7,#ffdde1);
        clip-path:circle(25% at left 25%);
        z-index:-1;
   
    }
    
    

    footer{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: #020A27;
        padding: 2rem 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            text-align: center;
            opacity: 0.7;
            &:nth-child(1){
                font-size:1.1rem;
            }
            &:nth-child(2){
                font-size:0.8rem;
            }
        }
        .ga{
           width:215px;
           
            /* border:1px solid red; */
            a{
                display:flex;
                /* border:1px solid red; */
                img{
                    height:20px;
                    width:20px;
                }
                
                p{
                height:20px;
                line-height:20px;
                margin: 0px 0px 0px 3px; 
                color:#939393;
            }
            }
            
        }
        
    }
`;

export default BodyContent;
