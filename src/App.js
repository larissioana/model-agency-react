
import {GlobalStyle}   from "./GlobalStyles";
//components
import Nav from "./components/Nav";
//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import AboutModels from "./pages/AboutModels";
import EventsPage from "./pages/EventsPage";
import Contact from "./pages/Contact";
import {Route,Routes,useLocation} from 'react-router-dom';
//Animation
import { AnimatePresence } from "framer-motion";


function App() {
 const location=useLocation();
  return (
    <div className="App">
  
    <GlobalStyle/>
    <AnimatePresence mode='wait'>
    <Nav/>
 
      <Routes location={location} key={location.pathname}>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about-us' element={<AboutPage/>}></Route>
      <Route path='/gallery' element={<GalleryPage/>}></Route>
      <Route path='/our-models' element={<AboutModels/>}></Route>
      <Route path='/events' element={<EventsPage/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </AnimatePresence>
    </div>
  );
}

export default App;
