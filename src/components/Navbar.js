import React ,{useState} from 'react'


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

    return (
        <NavbarContainer bgColor="transparent">
            <PaddingContainer
                top="1.2rem"
                bottom="1.2rem"
                left="5%"
            >
                <Container>
                    <FlexContainer justify="space-between">
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
