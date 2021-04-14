import React from 'react'

//Styles
import styled from 'styled-components'

//animation
import {
    pageAnimation} from '../animation'
  import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
        <motion.div exit="exit">
        <AboutContainer>
           <Heading>Not Found</Heading>
           <Describtion>The page you are looking for does not exist!</Describtion>
        </AboutContainer>
        </motion.div>
        </>
    )
}

export default About;


const AboutContainer = styled.div`
  padding: 15px 100px 15px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:start;
  align-content: center;

  @media screen and (max-width: 1080px) {
  padding: 15px 55px 15px 55px;
  }

  @media screen and (max-width: 765px) {
  padding: 15px 35px 15px 35px;
  }
 `

const Heading = styled.h2`
font-size: 32px;
letter-spacing: 2px;
color: #884AF4;

@media screen and (max-width: 765px) {

font-size: 28px;


}
`

const Describtion = styled.p`
font-size: 22px;
margin: 20px 0px 60px 0px;
color: #252525;
color: white;
letter-spacing: 1.5px;


@media screen and (max-width: 1080px) {
  line-height: 2;

}

@media screen and (max-width: 765px) {

font-size: 20px;
line-height: 1.5;
margin: 20px 0px 30px 0px;

}

`
