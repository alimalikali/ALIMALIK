"use client";
import MultiLayerParallax from "@/app/components/animations/MultiLayerParallax ";
import React from "react";
import Resume from "./aboutComponents/Resume";
import Teacher from "./aboutComponents/Teacher";
import Inspiration from "./aboutComponents/Inspiration";
import Languages from "./aboutComponents/Languages";

const Life = () => {
 
  return (
    <div>
      <MultiLayerParallax />
      <div className="w-full  rounded-xl md:px-10 px-3">
        <div className=" md:space-y-80 space-y-40 mx-auto py-24 text-neutral-300">
          <Inspiration />
          <Teacher />
          <Resume />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Life;

// import { motion } from "framer-motion";
// import { shuffle } from 'lodash'; // Assuming Lodash is installed
// import Image from "next/image";
// import { useState } from "react";
// import img from './../../../public/life1.png'

// const testimonials = [
//   { id: 1, text: "Can not believe this is free. If X as much as $5,000 a month, it would be worth every penny. I plan to name my next child after X." },
//   { id: 2, text: "Devin R. - Growth Marketing Lead @ Square @Meta" },
//   { id: 3, text: "OpenAI" },
// ];

// const TestimonialCard = ({ testimonial }) => {
//     return (
//       <motion.div
//         className="rounded overflow-hidden shadow-md bg-white p-6"
//         key={testimonial.id}
//         initial={{ opacity: 0, scale: 0.8 }} // Initial hidden and scaled down
//         animate={{ opacity: 1, scale: 1 }} // Visible and normal scale
//         transition={{ duration: 0.5 }}
//       >
//         <p className="text-xl font-bold text-gray-800">{testimonial.text}</p>
//         {testimonial.author && (
//           <p className="text-gray-600 italic mt-2">{testimonial.author}</p>
//         )}
//       </motion.div>
//     );
//   };

//   export default function Testimonials() {
//     const [shuffledTestimonials, setShuffledTestimonials] = useState(testimonials);

//     const shuffleCards = () => {
//       const shuffled = shuffle(testimonials.slice()); // Shuffle a copy
//       setShuffledTestimonials(shuffled);
//     };

//     return (
//       <div className="container mx-auto px-4 py-8">
//         <header className="mb-4">
//           <h1>Testimonials</h1>
//         </header>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
//           onClick={shuffleCards}
//         >
//           Shuffle Cards
//         </button>
//         <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {shuffledTestimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//           ))}
//         </motion.div>
//       </div>
//     );
//   }
