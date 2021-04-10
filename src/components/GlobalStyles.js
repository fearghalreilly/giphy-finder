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



`

export default GlobalStyles;