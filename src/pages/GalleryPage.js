import styled from "styled-components";
import {Images} from '../Images';
//Animations
import{motion} from 'framer-motion';
import { pageAnimation,fade,container } from '../animation';

const GalleryPage=()=>{
     return(
     <Wrapper variants={pageAnimation} exit="exit" animate="show" initial="hidden">
     <motion.div variants={container} initial="hidden" animate="show" className="gallery-image">
     {Images.map(image=>{
     return <div key={image}> 
     <motion.img variants={fade} src={image} alt='portrait'/> 
     </div>
    })}
    </motion.div>
    </Wrapper>

    )
};

export default GalleryPage;

const Wrapper=styled(motion.div)`
    z-index:1;
    width:100vw;
    background:#3A3838;
    overflow-x:hidden;
    margin:0 auto;

    img{
        width:220px;
        height:15rem;
        object-fit: cover;
        filter:grayscale(90%);
        object-position: top;
        :hover{
                filter:none;
            }
            }
    .gallery-image{
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        padding:10rem 4.5rem 0rem 4.5rem;;

      
    }
    @media screen and (max-width:580px){
        width:100%;
        margin:0 auto;
        .gallery-image{
            padding:13rem 0rem;
            grid:.7rem;
           z-index:1;
           
        }
    }
    @media screen and (max-width:437px){
        width:100%;
        margin:0 auto;
        .gallery-image{
            display:grid;
         grid-template-columns: repeat(auto-fit,minmax(170px,1fr));
           padding:7rem 0rem;
           img{
            img{
                width:160px;
                height:190px;
                margin:0rem 0.6rem;
            }
           }
          
        }
    }
    @media screen and (min-width:3680px) and (max-width:398px){
        width:100%;
      
        .gallery-image{
            display:flex;
            flex-wrap:wrap;
            margin:0 auto;
            width:100%;
            gap:.5rem;
            img{
                width:150px;
                height:190px;
                margin:0rem 0rem;
            }
        }
    }
    @media screen and (min-width:378px) and (max-width:353px){
        width:100%;
        margin:0 auto;
        .gallery-image{
            display:flex;
            flex-wrap:wrap;
            margin:0 auto;
            width:100%;
            img{
                width:160px;
                height:190px;
                margin:0rem 0.6rem;
            }
         }
    }
    @media screen and (max-width:353px){
        width:100%;
        margin:0 auto;
        .gallery-image{
            display:flex;
            flex-wrap:wrap;
            margin:0 auto;
            width:100%;
            img{
                width:160px;
                height:190px;
                margin:0rem 0rem;
            }
        }
    }
`;