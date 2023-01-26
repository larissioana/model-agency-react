import portrait from'../images/portrait-small.jpg';
import styled from "styled-components";

const Header=()=>{
    return(
        <Wrapper>
          <div className="header-img">
        <img  src={portrait} alt='portrait'/>
        </div>
        </Wrapper>
    )
};
export default Header;

const Wrapper=styled.div`

width:100%;
height:100vh;
.header-img{
    overflow-x:hidden;
    overflow-y:hidden;
}
   img{
    width:100%;
    height:100vh;
    object-fit: cover;
    object-position: top;
 }
 @media screen and (max-width:380px){
        overflow-x:hidden;
    }
 `;