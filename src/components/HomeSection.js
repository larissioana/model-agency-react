import styled from "styled-components";
import { ImagesModels } from "../Images";
import{motion} from 'framer-motion'
import { fade,container } from "../animation";
import { useScrollAnimation } from "../useScrollAnimation";

const HomeSection=()=>{
const[element,controls]=useScrollAnimation();
    return(
        <Wrapper>
            <h1>Laya Agency</h1>
            <div className="description">
            <p>With a large portfolio of clients, which includes the most prestigious international and national brands, Laya Agency is successful in all branches of fashion: campaigns, editorials, fashion shows, catalogs, TV commercials, fashion festivals, respectively the organizers of FASHIONN WEEK.</p>
            </div>
            <div className="description">
            <br/>
            <p>We discovered, launched and promoted many top models and stars. We constantly impress over 45 models in different markets such as: New York, London, Paris, Milan, Singapore, Hong Kong, Beijing, Shanghai, Seoul, Istanbul or Taipei. Our agency has all the necessary approvals for the legal development of artistic impresario activity.</p>
            </div>
            <hr/>
            <h2>Welcome to the Model of the WEEK.</h2>
            <h4>Cassandra</h4>
            <motion.div ref={element}  className="gallery">
        {ImagesModels.map(image=>{
            return <motion.div variants={container} initial='hidden' animate={controls} className="item" key={image}>
               <motion.img variants={fade} src={image} alt='models'/>
                </motion.div>
         })}
         </motion.div>
         </Wrapper>
    )
};

export default HomeSection;

const Wrapper=styled(motion.div)`
overflow-x:hidden;
background:#3A3838;
color:white;
width:100vw;
margin:0 auto;


h1{
    font-size:clamp(2rem,4vw,4rem);
    font-family: 'Shadows Into Light Two', cursive;
    text-align:center;
    margin-bottom:4rem;
    color:#BB9580;
}

h2{
    font-size:clamp(1.5rem,4vw,3rem);
    font-family: 'Shadows Into Light Two', cursive;
    text-align: center;
    padding-top:3rem;
    
}
h4{
    font-size:clamp(1rem,2vw,2rem);
    font-family: 'Shadows Into Light Two', cursive;
    letter-spacing: .2rem;
    text-align: end;
    padding:5rem 3rem 0rem 0rem;;
}
.description{
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:1rem 2rem;
    overflow-x:hidden;
    max-width:90%;
  
    
}
p{
    max-width:600px;
   padding-left:3rem;
    font-size:clamp(.8rem,2vw,1.2rem);
    font-family: 'Shadows Into Light Two', cursive;
}
hr{
    margin-top:4rem;
}
.gallery{
    display:flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    overflow-x:hidden;
   
}
.item{
    margin:3rem auto;
    max-width:300px;
    height:30rem;

}
    img{
      height:100%;
      width:100%;
        object-fit: cover;
        }
        img:hover{
            filter:grayscale(70%);
            transition:filter .3s ease-in;
        }
      
        @media screen and (max-width:380px){
       overflow:hidden;
    }
`;