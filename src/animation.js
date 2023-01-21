
export const pageAnimation={
    hidden:{
      opacity:0,
      y:100,
      skew:'45deg',
      
    },
    show:{
     opacity:1,
     y:0,
     skew:'0deg',
     transition:{
      duration:0.75
     }
    },
    exit:{
     opacity:0,
     y:100,
     scale:0.8,
     transition:{
     duration:0.75
     }
    }
  };
  export const fade={
    hidden:{opacity:0,x:200},
    show:{opacity:1, x:0,transition:{ease:'easeInOut',duration:1.5}},
    
};

export const titleAnim={
  hidden:{
    opacity:0, x:-200
  },
  show:{
    opacity:1, x:0, transition:{
      duration:2,ease:"easeInOut"
    }
  }
}
export const titleAnim1={
  hidden:{x:200},
  show:{
      x:0,
      transition:{duration:2, ease:"easeOut"}
  }
};

export const container={
  hidden:{opacity:0},
  show:{opacity:1,transition:{duration:.75,ease:"easeOut",staggerChildren:0.25}}
};


