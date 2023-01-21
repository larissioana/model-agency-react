import { ImagesModels2} from "../Images";
import styled from "styled-components";
import {useScrollAnimation} from '../useScrollAnimation';
import { fade } from '../animation';
import {motion} from 'framer-motion'

const HomeSection1=()=>{
    //Animation
 const[element,controls]=useScrollAnimation();
    return(
        <>
        <Wrapper ref={element} variants={fade} animate={controls} initial='hidden'>
          <div className="gallery">
            <h4>Louisa</h4>
            {ImagesModels2.map(image=>{
                return <div key={image}>
                    <img  src={image} alt='model'/>
                </div>
            })}
          </div>
        </Wrapper>
        </>
    )
};

export default HomeSection1;

const Wrapper=styled(motion.div)`
overflow:hidden;
background:#3A3838;
color:white;
     h4{
        padding:5rem;
        font-size:clamp(1rem,2vw,2rem);
        font-family: 'Shadows Into Light Two', cursive;
        letter-spacing:.2rem;
     }
    .gallery{
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        place-items: center;
        padding-top:3rem;
        overflow:hidden;

        img{
            max-width:20rem;
            height:30rem;
            object-fit:cover;
            filter:grayscale(90%);
            
        }
        img:hover{
            transform:scale(1.1);
            transition:transform .5s ease-in-out;
          
        }
      
    }
    @media screen and (max-width:380px){
        overflow-x:hidden;
    }
`;
