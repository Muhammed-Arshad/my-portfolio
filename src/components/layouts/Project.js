import React from 'react'
import {motion} from 'framer-motion'
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button,
} from '../../styles/Global.styled.js'

import { FaGithub } from 'react-icons/fa';
import {
    TechStackCard,
    ProjectImageContainer,
    ProjectImage
} from '../../styles/MyProjects.styled.js'

import { fadeInLeftVariant,fadeInRightVariant } from '../../utils/Variants.js';

function Project({data}) {
    return (
      <FlexContainer 
        direction = {data.reverse? 'row-reverse': false}
        fullWidthChild>
        <motion.div
            variants= {data.reverse? fadeInRightVariant:fadeInLeftVariant}
            initial="hidden"
            whileInView="visible">
            <FlexContainer align= "center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">
                    {data.project_name}
                </Heading>

                <IconContainer color="blue" size='2rem'>
                    <FaGithub/>
                </IconContainer>
            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    {data.tech_stack.map((stack)=>(
                        <TechStackCard>{stack}</TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top = "1.5rem" bottom = "2rem">
                {data.project_desc}</ParaText>

            <Button>Visit Website</Button>
        </motion.div>

        <ProjectImageContainer justify = {data.reverse? "flex-start":"flex-end"}>
            <ProjectImage src = {data.project_img} alt={data.project_name}/>
        </ProjectImageContainer>
      </FlexContainer>  
    )
}

export default Project
