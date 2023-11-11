import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button,
} from '../../styles/Global.styled.js'

import {
    MenuIcon,
    NavMenuContainer,
    MenuItem,
} from '../../styles/Navbar.styled.js'

import {AiOutlineClose} from 'react-icons/ai';

import { navLinks } from '../../utils/Data.js';

function NavMenu({setOpenMenu}) {
    return (
       <NavMenuContainer>
        <PaddingContainer
            left="5%" right="5%" top="2rem"
        >
            <FlexContainer jsutify="flex-end" responsiveFlex>
                <MenuIcon onClick={()=> setOpenMenu(false)}>
                    <AiOutlineClose/>
                </MenuIcon>

            </FlexContainer>

        </PaddingContainer>

        <PaddingContainer top="8%">
            <FlexContainer direction="column" align="center" responsiveFlex>
                {navLinks.map((link)=>(
                    <MenuItem 
                    key= {link.id}
                    href={`#${link.href}`}
                    onClick={()=> setOpenMenu(false)}>{link.name}</MenuItem>
                ))}
            </FlexContainer>
        </PaddingContainer>
       </NavMenuContainer> 
    )
}

export default NavMenu
