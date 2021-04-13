import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', arial;
    font-size: 22px;
}

body {
    
    height:100%;
    width: 100%;
    font-family: 'Poppins', arial;
    background-color: black;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  max-width: 100%;
  display: block;
  
}

input {

}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active
{
 -webkit-box-shadow: 0 0 0 30px white inset !important;
}


`

export default GlobalStyles;