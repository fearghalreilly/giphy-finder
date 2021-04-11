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
  display: flex;
  flex-direction: column;
  justify-content: center;


`

const AlertSection = styled.div`
  background: #f44336;
  border-radius: 10px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 40vw;
  
  


  p {
    color: white;
    padding: 20px 15px 20px 20px;
    font-size: 18px;
   

  }

`
const IconContainer = styled.div`
  padding-left: 15px;

`