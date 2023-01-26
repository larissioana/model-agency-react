import styled from "styled-components";
import model from '../images/models5.jpg';
import {useState} from 'react';
//Animations
import{motion} from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutPage=()=>{
    
const titleAnimation={
        hidden:{opacity:0},
        show:{opacity:1, transition:{duration:1}}
    };
    const photoAnimation={
        hidden:{opacity:0,x:100},
        show:{opacity:1, x:0, transition:{duration:1.5}}
    };
    const [readMore, setReadMore]=useState(false);
    const info=' Modi qui nostrum dicta, optio minus saepe nisi libero autem illum quos iste minima quibusdam magni quis amet voluptatibus iusto laudantium excepturi tempora adipisci! Et delectus deleniti aspernatur similique esse error nobis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi qui nostrum dicta, optio minus saepe nisi libero autem illum quos iste minima quibusdam magni quis amet voluptatibus iusto laudantium excepturi tempora adipisci! Et delectus deleniti aspernatur similique esse error nobis et delectus deleniti.ibero autem illum quos iste minima quibusdam magni quis amet voluptatibus iusto laudantium excepturi tempora adipisci! Et delectus deleniti aspernatur similique esse error nobis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi qui nostrum dicta, optio minus saepe nisi libero autem illum quos iste minima quibusdam magni quis amet voluptatibus iusto laudantium excepturi tempora adipisci! Et delectus deleniti aspernatur similique esse error nobis et.';
    return(       
        <Wrapper variants={pageAnimation} exit="exit" animate="show" initial="hidden">
           <motion.div  className="left">
            <motion.h3 variants={titleAnimation} initial='hidden' animate='show'>
                About <motion.span variants={titleAnimation} initial='hidden' animate='show'>Laya Agency</motion.span>
            </motion.h3>
            <motion.p variants={titleAnimation} initial='hidden' animate='show'>{info}</motion.p>
            <p>
           {readMore? info :`${info.substring(0,160)}`}
            <button onClick={()=>setReadMore(!readMore)}>
             {readMore? 'Show Less' : 'Read More'}</button>
             </p>
           </motion.div>
           <motion.div className="right" variants={photoAnimation} initial='hidden' animate='show'>
            <img src={model} alt='model'/>
           </motion.div>
        </Wrapper>
        
    )
};

export default AboutPage;

const Wrapper=styled(motion.div)`
    overflow-x:hidden;
    background:#17181a;
    color:white;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin:0 auto;
    width:100vw;
    min-height:90vh;
    flex-wrap: wrap;
    .left,.right{
        flex:1;
    }
    .left{
        margin-top:6rem;
        padding:5% 6%;
        h3{
        font-size:clamp(1rem,2vw,2rem);
        font-family: 'Shadows Into Light Two', cursive;
        letter-spacing:.2rem;
        margin-bottom:4rem;
       
        span{
            color:#BB9580;
            text-transform: uppercase;
            font-size:clamp(1.5rem,3vw,3rem);
        }
        }
        p{
            font-family: 'Poppins',sans-serif;
            font-size:clamp(.5rem,2vw,.9rem);
            max-width:800px;
         }
         button{
            border:1px solid white;
            background:none;
            padding:1rem;
            color:#BB9580;
            font-family: "Poppins",sans-serif;
            margin-top:1rem;
            cursor:pointer;
            margin-top:.4rem;
            :hover{
                background:#BB9580;
                color:white;
                border:1px solid black;
                transition:all .3s ease-in-out;
            }
        }
        
    }
    .right{
        width:100%;
       
        img{
            width:100%;
             min-height:100vh;
            object-fit: cover;
            object-position: right;
           
        }
       
    }
`;

