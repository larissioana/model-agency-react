import{createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
    *{
    margin:0;
    padding:0;
    box-sizing: border-box;
   
    }
    body{
       overflow-x:hidden;
        background:#3A3838;
    }
  
   a{
    text-decoration: none;
    font-family: "Poppins",sans-serif;
    font-size:clamp(.8rem,2vw,1rem);
    letter-spacing: .2rem;
    color:#fff;

   }
   li{
    list-style: none;
   }
   .nav-links:hover a{
    color: rgb(121, 117, 117)
   }
   .nav-links li a:hover{
    color: rgb(188, 185, 185);
 }

`;