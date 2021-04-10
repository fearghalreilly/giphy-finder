import React, {useState} from 'react'

//Link
import {Link} from "react-router-dom";

//location
import {useLocation} from 'react-router-dom'

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  } from "@fortawesome/free-solid-svg-icons";

//Motion
  import { motion } from 'framer-motion';

//Styles
import styled from 'styled-components'



const Nav = () => {

  const [toggle, setToggle] = useState(false)

  //Toggle Burger Icon
  const handleToggleNav = () => setToggle(!toggle)

  //Location
    const { pathname } = useLocation();

    return (
        <>
        <NavbarContainer>
           <NavSection>
            <IconLink to='/'>GIPHY <span>Finder</span></IconLink>
            <NavbarMenu style={{ right: toggle ? '0' : '100%' }} onClick={handleToggleNav} >
                <NavbarItem><NavLink to="/">Home</NavLink>
                <Line
                    transition={{duration: 0.75}}
                    initial={{width: '-2%'}}
                    animate={{width: pathname === '/' ? '100%' : '0%'}}
                    />
                </NavbarItem>
                <NavbarItem><NavLink to="/favourites">Your Favourites</NavLink>
                <Line
                    transition={{duration: 0.75}}
                    initial={{width: '-2%'}}
                    animate={{width: pathname === '/favourites' ? '100%' : '0%'}}
                    />
                </NavbarItem>
                <NavbarItem><NavLink to="/about">About</NavLink>
                <Line
                    transition={{duration: 0.75}}
                    initial={{width: '-2%'}}
                    animate={{width: pathname === '/about' ? '100%' : '0%'}}
                    />
                </NavbarItem>
                <NavbarBtnItem><NavLink to="">Sign In</NavLink></NavbarBtnItem>
            </NavbarMenu>
            <BurgerIcon onClick={handleToggleNav}>
        {toggle ? <FontAwesomeIcon icon={faTimes} color="#fff" size="2x" /> : <FontAwesomeIcon icon={faBars} color="#fff" size="2x" />}
        </BurgerIcon>
            </NavSection> 
        </NavbarContainer>
        
        </>
    )
}

const NavbarContainer = styled.div`
     background: black;
     position: sticky;
     top: 0;
     width: 100%;
     z-index: 10;
`

const NavSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: black;
padding: 45px 100px 45px 100px;
position: sticky;
  top: 0;
  z-index:10;

  @media screen and (max-width: 1080px) {
  padding: 45px 55px 45px 55px;
  }

  @media screen and (max-width: 765px) {

    padding: 45px 35px 45px 35px;
  }

`

const IconLink = styled(Link)`
color: #00E6CC;
font-weight: bold;
font-size: 35px;

span {
color: #884AF4;
font-weight: Normal;
font-size: 30px;   

}

`

const NavbarMenu = styled.ul`
display:flex;
flex-direction:row;
align-items: center;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100vh;
    top: 0;
    position: absolute;
    opacity: 1;
    transition: all 0.5s ease;
   background: black;
    z-index: 1;
    padding-top: 100px;
}

`

const NavbarItem = styled.li`
margin: 0 20px;
position: relative;

@media screen and (max-width: 960px) {
  margin-bottom: 80px;
 
  }

`

const NavLink = styled(Link)`
color: white;
font-size: 22px;

@media screen and (max-width: 1080px) {
  font-size: 24px;
 
  }

  @media screen and (max-width: 765px) {

 
  }

`

const NavbarBtnItem = styled.li`
margin-left: 15px;
padding: 10px;
padding: 15px 30px;
background-image: linear-gradient(to bottom right, #00E6CC, #884AF4);
z-index: 999;
border-radius: 10px;

@media screen and (max-width: 960px) {
  margin-left: 0px;
 margin-top: -10px;
  width: 90vw;
  text-align: center;
  
 
  }
`

const Line = styled(motion.div)`
height: 4px;
background: #00F7FF;
width: 0%;
position: absolute;
top: 30px;

@media screen and (max-width: 960px) {
top: 30px;
}

`

const BurgerIcon = styled.div`
 display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: relative;
    top: -15px;
    right: -15px;
    transform: translate(-100%, 60%);
    font-size: 16px;
    cursor: pointer;
    z-index: 99;
   
  }

  `

export default Nav;