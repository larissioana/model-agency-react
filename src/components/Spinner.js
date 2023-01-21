import styled from "styled-components";

const Spinner=()=>{
    return(
        <SpinnerStyled>

        </SpinnerStyled>
    )
}
export default Spinner;

const SpinnerStyled=styled.div`
    border:5px solid #c3c4c8;
    border-top: 5px dotted #353837;
    border-radius: 50%;
    width:50px;
    height:50px;
    animation:spin 0.8s linear infinite;
    margin:7% auto;
    z-index:999;

    @keyframes spin{
        0%{
            transform:rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }
`

