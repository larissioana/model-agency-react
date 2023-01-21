
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScrollAnimation=()=>{
    const controls=useAnimation();
    const[element,view]=useInView({
        threshold:0
    });
    if(view){
        controls.start('show');
    }else{
        controls.start('hidden')
    }
    return[element,controls];
}