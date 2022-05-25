import React from 'react'
import { SectionStyled } from '../Layouts';
import MainTitle from './MainTitle';
import styled from 'styled-components';
import CtaButton from './CtaButton';



function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} para={''} />
                </div>
                <div className="gradient-cards-con">
                    {/* <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={person2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} />
                    <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={person} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  />
                    <GradientCard image={bitcoin2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'}  /> */}
                </div>


                <div className="load">
                    <CtaButton name={'View More'} />
                </div>
            </SectionStyled>
        </GradientCardsSectionStyled >
    )
}

const GradientCardsSectionStyled = styled.div`
    .load{
        padding-top: 3rem;
        text-align: center;
    }
    
`;

export default GradientCardsSection;
