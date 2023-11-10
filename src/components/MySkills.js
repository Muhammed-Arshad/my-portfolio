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
                        {/* As a Developer, I have a wide range of experience in
                        front-end development. I am proficient in Dart, FLutter, React,
                        HTML and CSS. My strong experience in building responsive and 
                        dynamic user interfaces using React and Redux has allowed me to create engaging 
                        and interactive web application. */}

                        As a seasoned developer with a rich two-year journey, I specialize in crafting fluid and engaging user experiences. 
                        My expertise spans across Flutter, React, and Node.js, where I've not only 
                        mastered the intricacies of each but also discovered the art of harmonizing them to create cohesive, cutting-edge applications.

                        During my professional journey, I've successfully translated conceptual ideas into tangible, user-friendly solutions.
                        My commitment to staying at the forefront of technological 
                        advancements ensures that the solutions I build are not just functional but also reflective of the latest industry trends.
                    </ParaText>

                    <ParaText>
                        {/* I have experience in using React for building scalable and
                        maintainable applications.This has allowed me to create efficient 
                        and sustainable code that can adapt to the changing needs of a business. */}
                        With a meticulous eye for detail, I take pride in delivering polished products that go beyond 
                        meeting expectations. Whether it's pushing the boundaries of Flutter's UI capabilities, harnessing the power of React's 
                        component-based architecture,or optimizing backend operations with Node.js, I approach every project with enthusiasm 
                        and a problem-solving mindset.

                         I am excited about the prospect of contributing my skills and passion to new challenges, collaborating to turn 
                         visions into digital realities. Let's embark on the journey of creating something extraordinary together
                    </ParaText>
                </div>

            </FlexContainer>

            <div>

            </div>

        </PaddingContainer>
    )
}

export default MySkills
