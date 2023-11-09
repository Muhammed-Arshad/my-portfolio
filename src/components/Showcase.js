import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer
} from '../styles/Global.styled.js'


import {BsLinkedin, BsTwitter, BsYoutube, BsInstagram} from "react-icons/bs";
// import { icons } from 'react-icons'


const Showcase = () => {
    return (
        <PaddingContainer
            id='Home'
            left = '3%'
            right = '10%'
            top = '15%'
            bottom = '10%'>
                <FlexContainer align = "center" fullWidthChild></FlexContainer>
                <div>
                    <Heading as = "h4" size = "h4">Hello!</Heading>
                    <Heading 
                     as = "h1" 
                     size = "h1"
                     top = "0.5rem"
                     bottom = "1rem"
                     >I'm <BlueText>Muhammed Arshad</BlueText></Heading>

                     <Heading as= "h3" size = "h3">
                        I'm a <BlueText>Frontend Developer</BlueText>
                     </Heading>

                     <ParaText as= "p" top="2rem">
                        Hello, my name is Muhammed Arshad and I'm a front-end
                        developer with 2 years of experience in creating and designing 
                        user-friendly mobile apps and web applications.
                     </ParaText>

                     <FlexContainer>
                        <IconContainer color='white' size = '1.5rem'>
                            <BsLinkedin/>
                        </IconContainer>

                        <IconContainer color='white' size = '1.5rem'>
                            <BsTwitter/>
                        </IconContainer>

                        <IconContainer color='white' size = '1.5rem'>
                            <BsYoutube/>
                        </IconContainer>

                        <IconContainer color='white' size = '1.5rem'>
                            <BsInstagram/>
                        </IconContainer>
                        
                     </FlexContainer>

                </div>

        </PaddingContainer>
    )
}

export default Showcase
