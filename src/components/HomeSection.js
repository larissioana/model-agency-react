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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reprehenderit animi at tenetur? Quod delectus laboriosam aperiam, eius quas a, aspernatur consequatur deserunt distinctio, impedit voluptate ipsa dolor vitae quo!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corporis voluptatem eos consequuntur provident earum explicabo a fuga? Minus vitae fugit incidunt hic tempore recusandae ad perspiciatis harum distinctio facere?</p>
            </div>
            <div className="description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reprehenderit animi at tenetur? Quod delectus laboriosam aperiam, eius quas a, aspernatur consequatur deserunt distinctio, impedit voluptate ipsa dolor vitae quo!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corporis voluptatem eos consequuntur provident earum explicabo a fuga? Minus vitae fugit incidunt hic tempore recusandae ad perspiciatis harum distinctio facere?</p>
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
    padding:0rem 2rem;
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