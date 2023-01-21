import styled from "styled-components";
import {modelsEvent} from '../data';
import eventsModel from '../images/event.mp4';
//Animations
import{motion} from 'framer-motion';
import { pageAnimation} from '../animation';


const EventsPage=()=>{ 
    return(
        <Wrapper variants={pageAnimation} exit="exit" animate="show" initial="hidden">
            <video src={eventsModel} autoPlay loop playsInline muted type="video/mp4"/>
            <div className="description">
            <h2>Discover your <span>Talent</span></h2>
            <h3>Laya International Model Agency - August 2022</h3>
            <h4>Beijing - <span>Shooting</span></h4>
            <div className="circle">
            <span>posing</span>
            </div>
            <div className="circle">
            <span>shooting</span>
            </div>
            <div className="circle">
            <span>model</span>
            </div>
            <div className="circle">
            <span>asian</span>
            </div>
            <div className="circle">
            <span>collection</span>
            </div>
            </div>
            <div className="events-gallery">
            {modelsEvent.map(item=>{
                return <div  key={item}>
                    <img src={item} alt='event'/>
                </div>
            })}
          </div>
        </Wrapper>
    )
};

export default EventsPage;

const Wrapper=styled(motion.div)`
   background:#3A3838;
   color:white;
   overflow-x:hidden;
   .description{
    padding:0rem 4rem 6rem 4rem;
   }
    video{
        width:100%;
        min-height:60%;
        margin-top:8rem;
       
    }
    h2{
        font-family: 'Shadows Into Light Two', cursive;
        font-size:clamp(1.5rem,3vw,2.5rem);
        letter-spacing:.1rem;
        text-align: center;
        margin-top:2rem;
        span{
            color:#bb9580;
            font-size:clamp(1.7rem,3vw,2.8rem);
        }
    }
    h3{
        font-family: 'Shadows Into Light Two', cursive;
        font-size:clamp(1.1rem,2vw,1.5rem);
        margin-top:2rem;
        letter-spacing:.2rem;
    }
    h4{
        font-family: 'Shadows Into Light Two', cursive;
        font-size:clamp(.9rem,2vw,1.1rem);
        margin-top:2rem;
        letter-spacing:.2rem;
        margin-bottom:2rem;
    }
    .circle {
        border-radius: 50%;
        width:2rem;
        height:2rem;
        background:#bb9580;
        margin-top:1rem;
        span{
            margin-left:4rem;
            font-family: 'Shadows Into Light Two', cursive;
            font-size:clamp(.8rem,2vw,1.1rem);
            letter-spacing:.3rem;
        }
    }
    .events-gallery{
        margin-top:8rem;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
       margin:0 auto;
       width:100%;
       grid-row-gap:.3rem;
       grid-column-gap:.5rem;
       padding:0rem 1rem 0rem 1rem;

        img{
            width:100%;
            height:30rem;
            object-fit: cover;
            object-position: top;
            &:hover{
                opacity:.7;
                transition:opacity .3s ease-in;
            }
        }
      
    }

`;