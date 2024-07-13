import React from 'react'
import {motion} from 'framer-motion';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button
} from '../styles/Global.styled.js'

import { 
    ShowcaseParticleContainer,
    ShowcaseImageCard ,
    Particle} from '../styles/Showcase.styled.js';

import {BsLinkedin, BsTwitter, BsYoutube, BsInstagram} from "react-icons/bs";

import ShowcaseImg from '../assets/my_profile_pic.png'
import BackgroundImg from '../assets/particle.png'

import { fadeInLeftVariant,fadeInRightVariant } from '../utils/Variants.js';

const MY_CV_PDF = 'http://localhost:3000/Arshad_CV.pdf'

const Showcase = () => {

    const downloadFile=(url)=>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download','')
        document.body.appendChild(aTag)
        aTag.click();
        aTag.remove();
    }

    return (
        <PaddingContainer
            id='Home'
            left = '5%'
            right = '5%'
            top = '18%'
            bottom = '10%'
            responsiveTop = "8rem"
            responsiveLeft = "1rem"
            responsiveRight = "1rem">
                <FlexContainer align = "left" fullWidthChild>
                <motion.div
                    // variants={fadeInLeftVariant}
                    // initial = "hidden"
                    // whileInView="visible"
                >
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
                        developer with over 3 years of experience in creating and designing 
                        user-friendly mobile apps and web applications.
                     </ParaText>

                     <FlexContainer gap="20px" responsiveFlex>
                        <a href="https://www.linkedin.com/in/muhammed-arshad-628b23193" target="_blank" rel="noopener noreferrer">
                            <IconContainer color='blue' size='1.5rem'>
                                <BsLinkedin/>
                            </IconContainer>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <IconContainer color='blue' size='1.5rem'>
                                <BsTwitter/>
                            </IconContainer>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <IconContainer color='blue' size='1.5rem'>
                                <BsYoutube/>
                            </IconContainer>
                        </a>
                        <a href="https://www.instagram.com/muhd_arshad_/" target="_blank" rel="noopener noreferrer">
                            <IconContainer color='blue' size='1.5rem'>
                                <BsInstagram/>
                            </IconContainer>
                        </a>
                    </FlexContainer>
                    <br/>
                    <FlexContainer justify="left" responsiveFlex>
                                <Button onClick={()=>{downloadFile(MY_CV_PDF)}}>
                                    Download CV</Button>
                            </FlexContainer>
                    </motion.div>
                    <FlexContainer 
                        as={motion.div}
                        variants={fadeInRightVariant}
                        initial="hidden"
                        whileInView="visible"
                        justify = "flex-end"
                    >
                        <ShowcaseParticleContainer>
                            <ShowcaseImageCard>
                                <img src={ShowcaseImg} alt='showcase' height={400} width={450}/>
                            </ShowcaseImageCard>

                            <Particle
                                as={motion.img}
                                animate={{
                                    x:[0,100,0],
                                    rotate:360,
                                    scale:[1,0.5,1]
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity
                                }}
                                src={BackgroundImg}
                                alt='particle'
                                top='-80px'
                                left= '20px'
                                rotate = '60deg' 
                            />

                            <Particle
                                as={motion.img}
                                animate={{
                                    y:[0,100,0],
                                    rotate:360,
                                    scale:[1,0.8,1]
                                }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity
                                }}
                                src={BackgroundImg}
                                alt='particle'
                                top='50px'
                                right= '-70px'
                                rotate = '0deg' 
                            />

                            <Particle
                                as={motion.img}
                                animate={{
                                    y:[0,100,0],
                                    rotate:360,
                                    scale:[1,0.9,1]
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity
                                }}
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
