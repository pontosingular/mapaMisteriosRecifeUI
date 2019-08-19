
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700&display=swap');
        
        color: white;
        padding: 0; 
        margin: 0;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        background-image: linear-gradient(rgba(208,62,53, 1) ,rgba(40,40,40, 1) );
        background-size: cover;
        min-height: 90vh;
    }

`;

export default GlobalStyle