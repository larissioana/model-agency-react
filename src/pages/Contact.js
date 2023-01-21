import styled from "styled-components";
import {useState} from 'react';
import{Navigate} from 'react-router-dom';
import { pageAnimation } from "../animation";
import {motion} from 'framer-motion';
import {AiFillCalendar} from'react-icons/ai';
import {BsEnvelopeFill,BsFillTelephoneFill,BsClockFill} from 'react-icons/bs';

const Contact=()=>{
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        telephone:"",
        date:"",
        time:"",
    });
    const [navigate,setNavigate]=useState(false);
 if(navigate){
  return <Navigate to='/'/>
 };

    function handleChange(e){
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [e.target.name]:[e.target.value]
            }
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        setFormData("");
        setNavigate(true);
      };
    return(
        <Wrapper variants={pageAnimation} exit="exit" animate="show" initial="hidden">
        <form id='form'  onSubmit={handleSubmit}>
            <ContentLeft className="contact-left">
                <h2>Contact Us</h2>
            <p className="calendar">
                <AiFillCalendar className="day"/>
                <span>Monday - Friday</span>
            </p>
            <p className="clock">
                <BsClockFill className="time"/>
                <span>9AM - 5PM</span>
            </p>
            <p className="phone">
                <BsFillTelephoneFill className="number"/>
                <span>+00 000 444 444</span>
            </p>
            <p className="contact-us">
                Contact Us On Our Email Address
            </p>
            <div className="contact-email">
                <BsEnvelopeFill className="email"/>
                <span>international@layamodelsagency.com</span>
            </div>
            </ContentLeft>
            <ContentRight className="contact-right">
                <div className="form-input">
                    <label htmlFor="Name & Surname">Name & Surname</label>
                    <input type='text' value={formData.name} required onChange={handleChange} name='name' id='name-surname' placeholder="Name & Surname"/>
                </div>
                <div className="flex-item">
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} value={formData.email} type="text" required name='email' id='email' placeholder="Email"/>
                </div>
                <div className="form-input">
                    <label htmlFor="telephone">Telephone Number</label>
                    <input type="text" required name='telephone' id='telephone' placeholder="Telephone Number"/>
                </div>
                </div>
                <div className="flex-item">
                    <div className="form-input">
                        <label htmlFor="appointment">Reservation Date</label>
                        <input onChange={handleChange} value={formData.date} type='date' name='date' id='date'/>
                    </div>
                    <div className="form-input">
                    <label htmlFor="appointment">Reservation Time</label>
                      <select onChange={handleChange} value={formData.time}  name="time" id="time">
                      <option value="9AM">9AM</option>
                      <option value="10AM">10AM</option>
                      <option value="11AM">11AM</option>
                      <option value="12PM">12PM</option>
                      <option value="1PM">1PM</option>
                      <option value="2PM">2PM</option>
                      <option value="3PM">3PM</option>
                      <option value="4PM">4PM</option>
                      <option value="5PM">5PM</option>
                      </select>
                    </div>
                </div>
                    <button>Send</button>
            </ContentRight>
        </form>
        </Wrapper>
    )
}

export default Contact;

const Wrapper=styled(motion.div)`
    padding:10rem 10rem;
    background:#3A3838;
    color:white;
    overflow-x:hidden;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    form{
        min-height:54vh;
        display:flex;
        justify-content: space-evenly;
        align-items: center;
       
    }
      
    @media screen and (max-width:970px){
            #form{
                display:grid;
                place-content:center;
                width:100%;
                padding:2rem 0.5rem;
    }
         }
    `;
    const ContentLeft=styled.div`
       margin-right: 10rem;
      .contact-left{
            flex:1;
    }
         h2{
        font-size:clamp(1rem,2vw,2rem);
        font-family: 'Shadows Into Light Two', cursive;
         padding-bottom:2rem;
        letter-spacing: .2rem;
        }
        .time,.day,.number,.email{
           
            color:#BB9580;
            font-size:clamp(1rem,2vw,1.4rem);
            }
            .clock,.envelope,.telephone,.calendar{
                padding-bottom:1rem;
            }
        span{
           padding-left:.5rem;
           font-size:clamp(.8rem,2vw,1rem);
           font-family: "Poppins",sans-serif;
        }
        .contact-us {
            margin:3rem 0rem 1.5rem 0rem;
            span{
             font-size:clamp(.8rem,2vw,1rem);
             font-family: "Poppins",sans-serif;
            }}
            @media screen and (max-width:500px){
                margin:0 auto;
                
            }
        
`;
     const ContentRight=styled.div`
    .flex-item{
        display:flex;
    }
    .contact-right{
        flex:1;
    }
       
    label{
        display:block;
        font-size:clamp(.7rem,2vw,.8rem);
        font-family: "Poppins",sans-serif;
        letter-spacing: .1rem;
        text-indent:1rem;
        margin-bottom:.6rem;
        margin-top:.6rem;
    }
   
    input,select{
            border:1px solid #b6b3b1;
            width:14rem;
            height:3rem;
        }
    #name-surname{
            width:28.5rem;
            margin-left:.5rem;
          }
        
    #email,#date,#time,#telephone{
            margin-left:.5rem;
        }
    input:focus{
            outline: none;
        }
    
    
    #name-surname,#email,#telephone,#date,#time::placeholder{
        font-family: "Poppins",sans;
        font-size:clamp(.7rem,2vw,.8rem);
        text-indent:.7rem;
    }

         button{
            width:28.5rem;
            height:3rem;
            margin-top:1rem;
            margin-left:0.5rem;
            border:none;
            background:#BB9580;
            cursor:pointer;
            color:white;
            text-transform: uppercase;
            font-family:'Poppins',sans-serif;
            &:hover{
                background:white;
                color:black;
                transition:all .7s ease-in;
            }
         
        }
        @media screen and (max-width:500px){
     
            margin:4rem auto;
      
            input,select{
                width:11rem;
                }
                button,#name-surname{
                    width:22.5rem;
                }
          }
      
         @media screen and (max-width:378px){
       
            input,select{
                width:10rem;
                }
                button,#name-surname{
                    width:20.5rem;
                }
          }
    `;





        