// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description: "A full-stack e-commerce solution with real-time inventory management",
//     image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280",
//     technologies: ["React", "Node.js", "MongoDB"],
//     link: "https://github.com/yourusername/project1"
//   },
//   {
//     id: 2,
//     title: "AI Task Manager",
//     description: "Smart task management app with AI-powered prioritization",
//     image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1280",
//     technologies: ["React", "Python", "TensorFlow"],
//     link: "https://github.com/yourusername/project2"
//   },
//   {
//     id: 3,
//     title: "Social Media Dashboard",
//     description: "Unified dashboard for managing multiple social media accounts",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1280",
//     technologies: ["React", "Redux", "Firebase"],
//     link: "https://github.com/yourusername/project3"
//   }
// ];

// const ProjectCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [direction, setDirection] = useState('right');
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = useCallback(() => {
//     if (isAnimating) return;
//     setDirection('right');
//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//     );
//     setTimeout(() => setIsAnimating(false), 500);
//   }, [isAnimating]);

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setDirection('left');
//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? projects.length - 1 : prevIndex - 1
//     );
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   useEffect(() => {
//     let intervalId;
//     if (isAutoPlaying) {
//       intervalId = setInterval(nextSlide, 5000);
//     }
//     return () => clearInterval(intervalId);
//   }, [isAutoPlaying, nextSlide]);

//   const getSlideStyles = (index) => {
//     const isCurrent = index === currentIndex;
//     const isPrev = index === (currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
//     const isNext = index === (currentIndex === projects.length - 1 ? 0 : currentIndex + 1);

//     let transform = 'translate-x-full opacity-0 scale-95';
//     if (isCurrent) transform = 'translate-x-0 opacity-100 scale-100';
//     else if (isPrev) transform = '-translate-x-full opacity-0 scale-95';
//     else if (isNext) transform = 'translate-x-full opacity-0 scale-95';

//     return `absolute w-full h-full transition-all duration-500 ease-in-out ${transform}`;
//   };

//   return (
//     <div className="relative w-full max-w-5xl mx-auto overflow-hidden h-[600px] group rounded-2xl shadow-2xl">
//       <div className="relative w-full h-full">
//         {projects.map((project, index) => (
//           <div key={project.id} className={getSlideStyles(index)}>
//             <div className="relative h-full overflow-hidden rounded-2xl">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
//                 <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500 ease-out">
//                   <h3 className="text-4xl font-bold mb-3 text-white tracking-tight">{project.title}</h3>
//                   <p className="text-lg mb-6 text-gray-200 max-w-2xl">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium
//                                  hover:bg-white/20 transition-colors duration-300"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mb-5 inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg
//                              hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1
//                              hover:shadow-lg"
//                   >
//                     View Project
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center
//                    bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all
//                    duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110"
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         <ChevronLeft size={28} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center
//                    bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all
//                    duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110"
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         <ChevronRight size={28} />
//       </button>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//         {projects.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 'right' : 'left');
//               setCurrentIndex(index);
//             }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-150
//                 ${index === currentIndex 
//                     ? 'bg-white scale-125' 
//                     : 'bg-white/50 hover:bg-white/75'}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectCarousel;