import {useState} from 'react';
import models from '../data';
import styled from 'styled-components';

//Animations
import{motion} from 'framer-motion';
import { pageAnimation } from '../animation';


const AboutModels=()=>{
    const[index,setIndex]=useState(0);
    const {name,description,image,city,age,coverImg}=models[index];
    const checkNumber=(number)=>{
        if(number > models.length-1){
            return 0;
        }
        return number;
    }
    const nextModel=()=>{
       setIndex((index)=>{
        let newIndex=index+1;
        return checkNumber(newIndex);
       })
    }

    return(
        <Wrapper coverImg={coverImg}>
            <motion.div  variants={pageAnimation} exit="exit" animate="show" initial="hidden" className="models-info">
            <img src={coverImg} alt='models'/>
            <div className="info">
            <img className='small' src={image} alt='models'/>
            <div className="info-right">
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{city}</h3>
            <p>{description}</p>
            <div className="next" onClick={nextModel}>next</div>
            </div>
            </div>
            </motion.div>
        </Wrapper>
        )}
    

export default AboutModels;

const Wrapper=styled(motion.div)`
    overflow:hidden;
    width:100vw;
    height:100vh;
    position:relative;
    img{
        width:100%;
        height:100vh;
        object-fit: cover;
    }
    
    .info{
        position:absolute;
        top:20%;
        right:15%;
        min-width:70%;
        min-height:75vh;
        background:rgba(0,0,0,.5);
        border-radius:.6rem;
        padding:2rem;
        margin-left:10rem;
        color:white;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
      
        h2{
            font-family: "Poppins",sans-serif;
            font-size:clamp(1rem,2vw,1.4rem);
            margin-bottom:.5rem;
        }
        h3{
            font-family: "Poppins",sans-serif;
            font-size:clamp(.9rem,2vw,1rem);
        }
        p{
            font-family: "Poppins",sans-serif;
            font-size:clamp(.7rem,2vw,.8rem);
            margin-top:.5rem;
        }
        .small{
            width:20rem;
            height:40vh;
        }
        .info-right{
            margin-left:4rem;
        }
        .next{
        position:absolute;
        right:1rem;
        top:-4%;
        color:white;
        font-weight: bolder;
        border-radius:50%;
        border:3px solid #d8d5d5;
        padding:1rem .5rem;
        cursor:pointer;
        }
    }
`;