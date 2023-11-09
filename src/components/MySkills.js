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
    SkillsCardContainer,
    SkillsCard
} from '../styles/MySkills.styled.js'

import { Skills } from '../utils/Data.js'

function MySkills() {
    return (
        <PaddingContainer
            id='Skills'
            top = "10%"
            bottom = "10%"
        >
            <FlexContainer fullWidthChild>
                <SkillsCardContainer>
                    {Skills.map((skill)=> (
                        <SkillsCard>
                            <IconContainer size ="5rem" color='blue'>
                                {skill.icon}
                            </IconContainer>

                            <Heading as="h4" size="h4">
                                {skill.tech}
                            </Heading>
                        </SkillsCard>
                     
                    ))}
                </SkillsCardContainer>

                <div>
                    <Heading as="h4" size= "h4">
                        MY SKILLS
                    </Heading>
                    <Heading as="h2" size = "h2" top="0.5rem">
                        What <BlueText>I can do</BlueText>
                    </Heading>

                    <ParaText top="2rem" bottom="1.5rem">
                        As a Developer, I have a wide range of experience in
                        front-end development. I am proficient in Dart, FLutter, React,
                        HTML and CSS. My strong experience in building responsive and 
                        dynamic user interfaces using React and Redux has allowed me to create engaging 
                        and interactive web application.
                    </ParaText>

                    <ParaText>
                        I have experience in using React for building scalable and
                        maintainable applications.This has allowed me to create efficient 
                        and sustainable code that can adapt to the changing needs of a business.
                    </ParaText>
                </div>

            </FlexContainer>

            <div>

            </div>

        </PaddingContainer>
    )
}

export default MySkills
