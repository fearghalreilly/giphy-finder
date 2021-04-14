import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

//Styles
import styled from 'styled-components'

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  } from "@fortawesome/free-solid-svg-icons";

  //Animations
//Animations
import { motion , AnimatePresence} from "framer-motion";
import {
  fade,
} from "../animation";


const Alert = () => {

  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;


  return (
    <>
    <AnimatePresence exitBeforeEnter>
    {alert ? ( 
      <AlertContainer  variants={fade}
      initial='hidden'
      animate='show'
      exit='hidden'> 
      <AlertSection>
        <IconContainer>
      <FontAwesomeIcon icon={faExclamationCircle} color="#fff" size="2x"  />
      </IconContainer>
      <p>Please enter something</p>
      </AlertSection>
    </AlertContainer>

    ) : null }
    </AnimatePresence>
    </>
       
  )
};

export default Alert;

const AlertContainer = styled(motion.div)`
  background: black;
  padding: 0px 100px 0px 100px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1080px) {
  padding: 0px 55px 0px 55px;
  }

  @media screen and (max-width: 765px) {
  padding: 0px 35px 0px 35px;
  }

`

const AlertSection = styled(motion.div)`
  background: #f44336;
  border-radius: 10px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 50%;

  
  @media screen and (max-width: 1080px) {
    width: 100%;
  }

 
  
  
  p {
    color: white;
    padding: 20px 15px 20px 20px;
    font-size: 22px;
    letter-spacing: 1.5px;
   
    @media screen and (max-width: 765px) {

      font-size: 20px;

}

  }

`
const IconContainer = styled.div`
  padding-left: 15px;

`