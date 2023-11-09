import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer
} from '../styles/Global.styled.js'

import { projectDetails } from '../utils/Data.js'
import Project from './layouts/Project.js'

function MyProjects() {
    return (
        <PaddingContainer
            id='Projects'
            top="5%"
            bottom = "5%"
            left = "5%"
        >
            <Heading as="h4" size="h4">MY PROJECTS</Heading>

            <Heading as="h2" size="h2">
                What <BlueText>I have built</BlueText>
            </Heading>

            {projectDetails.map((project)=> (
                <PaddingContainer key={project.id} top="5rem" bottom="5rem">
                    <Project data = {project}/>
                </PaddingContainer>
            ))}

        </PaddingContainer>
    )
}

export default MyProjects
