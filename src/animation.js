export const pageAnimation = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  export const tap = {
      tap: {
           scale: 0.9,
      },
  };

  export const hover = {
      hover: {
          scale: 1.2,
          opacity: 0.7,
          transition: {
              duration: 0.5,
          }
      }
  }

  
 export const fade = {
    show: { opacity: 1,
    },
    hidden: { opacity: 0},
    exit: {
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
  }


