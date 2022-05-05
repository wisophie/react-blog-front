import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import avatar from '../img/avata.jpg';
import CtaButton from './CtaButton';

import person2 from '../img/ai.jpg';
import bitcoin from '../img/coin.jpg';
import person3 from '../img/person3.jpg';
import computer from '../img/computer.jpg';

function DemonstrationSection() {

    const ctaButton = <CtaButton name={'Place bid'} />

    return (
        <DemonstrationSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Live Projects'} subtitle={'Live Projects'} para={''} />
                </div>

                <div className="gradient-cards-con">
                    {/* <GradientCard image={computer} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                <GradientCard image={person3} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                <GradientCard image={bitcoin} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                <GradientCard image={person2} avatar={avatar} name={'@Joel Clock'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} /> */}
                </div>
            </SectionStyled>
        </DemonstrationSectionStyled>
    )
}


const DemonstrationSectionStyled = styled.div`
  
`;
export default DemonstrationSection;
