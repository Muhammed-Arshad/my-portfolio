import React ,{useEffect, useState} from 'react'


import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button,
    Container
} from '../styles/Global.styled.js'

import {GiHamburgerMenu} from 'react-icons/gi';
import {theme} from '../utils/Theme.js' 

import {
    NavbarContainer,
    Logo,
    MenuIcon
} from '../styles/Navbar.styled.js'

import NavMenu from './layouts/NavMenu.js';

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            window.scrollY > 50? setSticky(true) : setSticky(false)
    }
        window.addEventListener('scroll',onScroll);

        return ()=> window.removeEventListener('scroll',onScroll);
    },[])

    return (
        <NavbarContainer bgColor={sticky ? theme.colors.primary:"transparent"}>
            <PaddingContainer
                top="1.2rem"
                bottom="1.2rem"
                left="5%"
                responsiveLeft="1rem"
                responsiveRight="1rem"
            >
                <Container>
                    <FlexContainer justify="space-between" responsiveFlex>
                        <Logo>
                            Dev<BlueText>Arsh</BlueText>
                        </Logo>

                        <MenuIcon onClick={()=>{setOpenMenu(true)} }>
                            <GiHamburgerMenu/>
                        </MenuIcon>
                    </FlexContainer>
                </Container>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
            </PaddingContainer>
        </NavbarContainer>
    )
}

export default Navbar
