import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import BlogsSection from './BlogsSection';
import ContactSection from './ContactSection';
import DemonstrationSection from './DemonstrationSection';
import GradientCardsSection from './GradientCardsSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';


function BodyContent() {
    return (
        <BodyContentStyled>
            <InnerLayout>
                <MainTitle title={'Top Rank This Month'} subtitle={'All Projects'} />
                <div className="sellercards">
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                    <SellerCard />
                </div>
                <BlogsSection />
                <GradientCardsSection />
                <DemonstrationSection />
            </InnerLayout>
            {/* <ContactSection /> */}
            <footer>
                <p>Copyright ©Yan Li. All Rights Reserved</p>
                <p><a href="https://beian.miit.gov.cn">浙ICP备2022010356号-1</a></p>
            </footer>
        </BodyContentStyled >
    )
}

const BodyContentStyled = styled.div`
	
    position:relative;
    &::before{
        content:"";
        position:absolute;
        top:3%;
        left:0;
        width: 100%;
        height:100%;
        background:linear-gradient(#2193b0,#6dd5ed);
        clip-path:circle(16% at right 20%);
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
        clip-path:circle(13% at left 9%);
        z-index:-1;
   
    }
    .sellercards{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        margin: 1.5rem 0;
        
        
    }
    

    footer{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: #020A27;
        padding: 2rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
            text-align: center;
            opacity: 0.7;
            &:nth-child(2){
                font-size:0.8rem;
            }
        }
        
    }
`;

export default BodyContent;
