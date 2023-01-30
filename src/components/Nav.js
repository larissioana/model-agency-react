import styled from "styled-components";
import {useState} from 'react';
import {links,social} from '../data';
import{HiMenuAlt3} from 'react-icons/hi';
import { NavLink } from "react-router-dom";

const Nav=()=>{
   const[showLinks,setShowLinks]=useState(false);
    return(
        <div>
          <NavLinksStyle>
            <div className="nav-flex">
                <div className="nav-header">
                <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
                        <HiMenuAlt3/>
                    </button>
                   </div>
                  
                    <div className={`${showLinks?'links-container show-container':
                     'links-container'}`}>
                        <ul className="links">
                           {links.map((link)=>{
                           const {id,url,text}=link;
                           return<li key={id}>
                            <NavLink to={url}>
                                {text}
                            </NavLink>
                           </li>
                           })}
                        </ul>
                    </div>
                   
                    <ul className="social-icons">
                     {social.map((item)=>{
                        const{id,icon,url}=item;
                        return<li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                     })}
                    </ul>
                </div>
            </NavLinksStyle>
        </div>
    )
};
export default Nav;

const NavLinksStyle=styled.nav`
      height:4rem;
      background: rgba(56, 55, 55, 0.8);
      backdrop-filter: blur(5px);
      position:absolute;
      top:3%;
      width:100%;
      z-index:6;
      display:flex;
      justify-content: space-around;
      align-items: center;
      .nav-flex,.nav-header{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        }
      button{
        background:none;
        border:none;
        color:rgb(172, 169, 169);
        font-size:clamp(1.7rem,3vw,3rem);
        padding-right:19rem;
        cursor:pointer;
        display: none;
        }
   
   .links,.social-icons{
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding-right:4rem;
    
   }
   .social-icons a{
    color:rgb(172, 169, 169);
    font-size:clamp(.9rem,2vw,1.2rem);
   }
   li{
        padding: 1.3rem;
        }
    a{
        text-transform: uppercase;
        font-family: "Poppins",sans-serif;
    }
    .links:hover a {
       color: rgb(122, 117, 117)
     }
            
    .links li a:hover {
     color: rgb(206, 200, 200);
    }
    @media screen and (max-width:1170px){
        button{
        display:block;
        padding-right:4rem;
     }
    .nav-flex{
     position:relative;
    }
    .links-container {
        position:absolute;
        top:8rem;
        left:-3.5rem;
        width:100%;
        backdrop-filter: blur(55px);
        min-height:70vh;
        padding:2rem 3rem;
        border-radius: .2rem;
        transform: translateX(-200%);
        transition:transform .7s ease-out;
      
        
        .links{
            display:block;
        }
    }
    .show-container{
        transform:translateX(0%);
        
    }
    }
    
`;