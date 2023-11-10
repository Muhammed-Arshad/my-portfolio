import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer
} from '../styles/Global.styled.js'

import { 
    ShowcaseParticleContainer,
    ShowcaseImageCard ,
    Particle} from '../styles/Showcase.styled.js';

import {BsLinkedin, BsTwitter, BsYoutube, BsInstagram} from "react-icons/bs";

import ShowcaseImg from '../assets/showcase-img.png'
import BackgroundImg from '../assets/particle.png'

const Showcase = () => {
    return (
        <PaddingContainer
            id='Home'
            left = '5%'
            right = '10%'
            top = '15%'
            bottom = '10%'>
                <FlexContainer align = "left" fullWidthChild>
                <div>
                    <Heading as = "h4" size = "h4">Hello!</Heading>
                    <Heading 
                     as = "h2" 
                     size = "h2"
                     top = "0.5rem"
                     bottom = "1rem"
                     >I'm <BlueText>Muhammed Arshad</BlueText></Heading>

                     <Heading as= "h3" size = "h3">
                        I'm a <BlueText>Frontend Developer</BlueText>
                     </Heading>

                     <ParaText as= "p" top="2rem" bottom="2rem">
                        Hello, my name is Muhammed Arshad and I'm a front-end
                        developer with 2 years of experience in creating and designing 
                        user-friendly mobile apps and web applications.
                     </ParaText>

                     <FlexContainer gap="20px">
                        <IconContainer color='blue' size = '1.5rem'>
                            <BsLinkedin/>
                        </IconContainer>

                        <IconContainer color='blue' size = '1.5rem'>
                            <BsTwitter/>
                        </IconContainer>

                        <IconContainer color='blue' size = '1.5rem'>
                            <BsYoutube/>
                        </IconContainer>

                        <IconContainer color='blue' size = '1.5rem'>
                            <BsInstagram/>
                        </IconContainer>
                        
                     </FlexContainer>
                    </div>
                    <FlexContainer justify = "flex-end">
                        <ShowcaseParticleContainer>
                            <ShowcaseImageCard>
                                <img src={ShowcaseImg} alt='showcase'/>
                            </ShowcaseImageCard>

                            <Particle
                                src={BackgroundImg}
                                alt='particle'
                                top='-80px'
                                left= '20px'
                                rotate = '60deg' 
                            />

                            <Particle
                                src={BackgroundImg}
                                alt='particle'
                                top='50px'
                                right= '-70px'
                                rotate = '0deg' 
                            />

                            <Particle
                                src={BackgroundImg}
                                alt='particle'
                                bottom='10px'
                                left= '-70px'
                                rotate = '50deg' 
                            />
                        </ShowcaseParticleContainer>
                    </FlexContainer>
                </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase
