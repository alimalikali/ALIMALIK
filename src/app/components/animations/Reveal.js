"use client"
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
const Reveal = ({ children }) => {
 
 const ref = useRef(null);
 const isInView=useInView(ref,{once:true});
 const mainControls = useAnimation();
 const slideControls = useAnimation();

 useEffect(() => {
    if(isInView){
        mainControls.start("visible");
        slideControls.start("visible");

    }
 }, [isInView]);
 
    return (
    <div ref={ref} style={{ position: "", width: "100%",  overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 120 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:1,delay:0.5}}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left:0  ,opacity:0.2},
          visible: { left:"100%",opacity:0.5 },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{duration:0.5,ease:"easeIn"}}
        style={{
            position:"absolute",
            top:4, bottom:4,left:0,right:0, zIndex:20,background:"black"
        }}
      >
      </motion.div> */}
    </div>
  );
};

export default Reveal;
