import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

//Styles
import styled from 'styled-components'

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  } from "@fortawesome/free-solid-svg-icons";

const Alert = () => {

  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;


  return (
    <>
    {alert ? ( 
      <AlertContainer>
      <AlertSection>
        <IconContainer>
      <FontAwesomeIcon icon={faExclamationCircle} color="#fff" size="2x"  />
      </IconContainer>
      <p>Please enter something</p>
      </AlertSection>
    </AlertContainer>

    ) : (
      <AlertContainer>
      <AlertSection style={{ backgroundColor: "black"}}>
        <IconContainer>
      <FontAwesomeIcon icon={faExclamationCircle} color="#black" size="2x"  />
      </IconContainer>
      <p style={{ color: "black"}}>Please enter something</p>
      </AlertSection>
    </AlertContainer>



    )}
    </>
       
  )
};

export default Alert;

const AlertContainer = styled.div`
  background: black;
  padding: 0px 100px 0px 100px;
  width: 100%;

  @media screen and (max-width: 1080px) {
  padding: 0px 55px 0px 55px;
  }

  @media screen and (max-width: 765px) {
  padding: 0px 35px 0px 35px;
  }

`

const AlertSection = styled.div`
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
    letter-spacing: 2px;
   

  }

`
const IconContainer = styled.div`
  padding-left: 15px;

`