
import styled from 'styled-components';
import {useRef,useEffect,useState} from 'react';
import { ImagesCarousel } from '../Images';
import{motion} from 'framer-motion';
import { titleAnim,titleAnim1 } from '../animation';
import { useScrollAnimation } from '../useScrollAnimation';


const Home=()=>{
   const [width,setWidth]=useState(0);
   const carousel=useRef();
   useEffect(()=>{
   setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
   },[]);

const[element,controls]=useScrollAnimation();
    return(
        <Wrapper>
            <motion.div ref={element}className="home-title">
            <motion.h1 variants={titleAnim} animate={controls} intitial='hidden'>biggest</motion.h1>
            <h1>models</h1>
            <motion.h1 variants={titleAnim1} animate={controls} intitial='hidden'>agency</motion.h1>
        </motion.div>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor:'grabbing'}}>
        <motion.div drag='x' dragConstraints={{right:0,left:-width}} className='inner-carousel'>
         {ImagesCarousel.map(image=>{
            return(
            <div  className='item' key={image}>
            <img  src={image} alt='portrait'/> 
            </div>
            )
  })}
        </motion.div>
        </motion.div>

</Wrapper>
    )
}

export default Home;

const Wrapper=styled(motion.div)`
overflow-x:hidden;
background:#3A3838;
margin:0 auto;
.carousel{
    cursor:grab;
    overflow-x:hidden;
    .inner-carousel{
        display:flex;
       
    }
}
.item{
    height:100vh;
    min-width:25rem;
    margin:2rem 0.5rem;
    img{
        width: 100%;
        height:36rem;
        object-fit: cover;
        pointer-events: none;
    }
}
.home-title{
    padding-top:3rem;
    text-align: center;
    
}
h1{
    font-size: clamp(1rem, 5vw, 4rem);
    letter-spacing: 0.6rem;
    font-family: 'Shadows Into Light Two', cursive;
    font-weight: bolder;
    color: rgb(246, 243, 243);
    line-height: 6rem;
  
}
    @media screen and (max-width:380px){
        overflow-x:hidden;
        
    }
`;