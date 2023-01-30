import styled from "styled-components";
import model from '../images/models5.jpg';

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
  
    return(       
        <Wrapper variants={pageAnimation} exit="exit" animate="show" initial="hidden">
           <motion.div  className="left">
            <motion.h3 variants={titleAnimation} initial='hidden' animate='show'>
                About <motion.span variants={titleAnimation} initial='hidden' animate='show'>Laya Agency</motion.span>
            </motion.h3>
            <p>Initially conceived in 2000 as an advertising agency, Laya Agency soon continued its activity in the modeling industry. Since its beginnings, Laya Agency stood out as an agency with a cosmopolitan team and a top management that built the careers of a large number of international models from scratch. Since its beginnings, Laya Agency has distinguished itself as an agency with a cosmopolitan team and top management. Laya Agency has built the careers of many national and international models. Our agency represents professional models and offers exceptional management: it supports beginners with innovative training courses, offers modeling contracts and countless promotion opportunities.</p>
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

