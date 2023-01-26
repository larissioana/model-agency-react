import Home from '../components/Home';
import Header from '../components/Header';
import HomeSection from '../components/HomeSection';
import HomeSection1 from '../components/HomeSection1';
import styled from 'styled-components';
//Animations
import{motion} from 'framer-motion';
import { pageAnimation } from '../animation';

const HomePage=()=>{
    return(
    <Wrapper variants={pageAnimation} exit="exit" animate="show" initial="hidden">
    <Header/>
    <Home/>
    <HomeSection/>
    <HomeSection1/>
    </Wrapper>
    )
};

export default HomePage;

const Wrapper=styled(motion.div)`
    overflow-x:hidden;
`