"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "Luxury Residential Villa",
    description:
      "A premium residential villa designed with modern architecture, refined materials, and optimized spatial flow.",
    images: [
      "/images/projects/project1-1.jpg",
      "/images/projects/project1-2.jpg",
    ],
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    description:
      "A thoughtfully planned commercial space built for scalability, efficiency, and long-term asset value.",
    images: [
      "/images/projects/project2-1.jpg",
      "/images/projects/project2-2.jpg",
    ],
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />

      {/* ===== HERO (Navbar-safe) ===== */}
      <section className="relative h-[520px] pt-20 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/projects-hero.jpg"
          alt="REO Projects"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white text-5xl md:text-6xl font-bold mb-4"
          >
            Our Signature Projects
          </motion.h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Curated real estate developments designed for long-term value and
            architectural excellence.
          </p>
        </motion.div>
      </section>

      {/* ===== PROJECT LIST ===== */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.1)] overflow-hidden grid lg:grid-cols-2"
          >
            {/* Images */}
            <div className="grid grid-cols-2 gap-3 p-4">
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-64 rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#db071d] mb-4">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                {project.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpen(true)}
                className="cursor-pointer w-fit bg-gradient-to-r from-[#db071d] to-[#b00516] text-white px-10 py-3 rounded-xl font-semibold shadow-md"
              >
                Buy This Project
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white max-w-md w-full rounded-3xl p-8 text-center shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#db071d] mb-4">
                Pricing on Request
              </h3>
              <p className="text-gray-600 mb-8">
                Project pricing and availability are shared after a brief
                discussion. Please contact our team to proceed further.
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 rounded-lg border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => router.push("/contact-us")}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#db071d] to-[#b00516] text-white font-semibold cursor-pointer"
                >
                  Contact Team
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}


// /* eslint-disable react/jsx-no-comment-textnodes */
// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const projects = [
//   {
//     id: 1,
//     title: "Luxury Residential Villa",
//     category: "Residential",
//     description: "A premium residential villa designed with modern architecture, refined materials, and optimized spatial flow.",
//     images: ["/images/projects/project1-1.jpg", "/images/projects/project1-2.jpg"],
//   },
//   {
//     id: 2,
//     title: "Commercial Office Complex",
//     category: "Commercial",
//     description: "A thoughtfully planned commercial space built for scalability, efficiency, and long-term asset value.",
//     images: ["/images/projects/project2-1.jpg", "/images/projects/project2-2.jpg"],
//   },
// ];

// export default function ProjectsPage() {
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
  
//   // For Parallax Hero
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"]
//   });
//   const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const opacityHero = useTransform(scrollYProgress, [0, 1], [1, 0]);

//   return (
//     <div className="bg-white text-gray-900 selection:bg-[#db071d] selection:text-white">
//       <Navbar />

//       {/* ===== ENHANCED PARALLAX HERO ===== */}
//       <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
//         <motion.div style={{ y: yParallax, opacity: opacityHero }} className="absolute inset-0">
//           <Image
//             src="/images/mumbai.jpg"
//             alt="REO Projects"
//             fill
//             priority
//             className="object-cover opacity-60 scale-110"
//           />
//         </motion.div>
//         <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

//         <div className="relative z-10 text-center px-6">
//           <motion.span 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="inline-block text-[#db071d] font-bold tracking-[0.3em] uppercase mb-4"
//           >
//             Portfolio
//           </motion.span>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white"
//           >
//             OUR SIGNATURE <br /> <span className="text-outline">PROJECTS</span>
//           </motion.h1>
//         </div>
//       </section>

//       {/* ===== PROJECT LIST WITH STAGGERED ANIMS ===== */}
//       <section className="max-w-7xl mx-auto px-6 py-32 space-y-40">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ once: true, amount: 0.3 }}
//             className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
//           >
//             {/* Visuals - Interactive Image Grid */}
//             <motion.div 
//               variants={{
//                 offscreen: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
//                 onscreen: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 1 } }
//               }}
//               className="w-full lg:w-3/5 grid grid-cols-2 gap-4"
//             >
//               {project.images.map((img, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 0.98, rotate: i === 0 ? -1 : 1 }}
//                   className={`relative ${i === 1 ? 'mt-12' : ''} h-[400px] rounded-3xl overflow-hidden shadow-2xl`}
//                 >
//                   <Image src={img} alt={project.title} fill className="object-cover transition-transform duration-700 hover:scale-110" />
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Content - Smooth Stagger */}
//             <motion.div 
//               variants={{
//                 offscreen: { y: 50, opacity: 0 },
//                 onscreen: { y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.8 } }
//               }}
//               className="w-full lg:w-2/5"
//             >
//               <p className="text-[#db071d] font-bold mb-2">// 0{index + 1}</p>
//               <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
//                 {project.title}
//               </h2>
//               <p className="text-gray-500 text-lg mb-8 leading-relaxed italic">
//                 {project.description}
//               </p>
              
//               <motion.button
//                 whileHover={{ x: 10 }}
//                 onClick={() => setOpen(true)}
//                 className="group flex items-center gap-4 text-xl font-bold text-[#db071d]"
//               >
//                 VIEW DETAILS 
//                 <span className="w-12 h-[2px] bg-[#db071d] transition-all group-hover:w-20" />
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         ))}
//       </section>

//       {/* ===== RE-ANIMATED MODAL ===== */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl px-6"
//           >
//             <motion.div
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 100, opacity: 0 }}
//               className="bg-white max-w-xl w-full rounded-[40px] p-12 text-center relative"
//             >
//               <div className="absolute top-6 right-8 text-3xl cursor-pointer" onClick={() => setOpen(false)}>×</div>
//               <h3 className="text-4xl font-black text-[#db071d] mb-4">Request a Quote</h3>
//               <p className="text-gray-500 mb-10 text-lg">
//                 Exclusive access to premium real estate requires a personal touch. 
//                 Our team will reach out within 24 hours.
//               </p>

//               <div className="flex flex-col gap-4">
//                 <button
//                   onClick={() => router.push("/contact-us")}
//                   className="w-full py-5 rounded-2xl bg-[#db071d] text-white text-xl font-bold hover:bg-black transition-colors"
//                 >
//                   Contact Specialist
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <Footer />

//       {/* Global CSS for text outline effect */}
//       <style jsx global>{`
//         .text-outline {
//           color: transparent;
//           -webkit-text-stroke: 1px rgba(255,255,255,0.8);
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { 
//   FaArrowRight, 
//   FaExpand, 
//   FaMapMarkerAlt, 
//   FaRulerCombined, 
//   FaBed, 
//   FaBath, 
//   FaCar,
//   FaStar,
//   FaChevronLeft,
//   FaChevronRight,
//   FaPlay,
//   FaPause
// } from "react-icons/fa";
// import { FiShare2 } from "react-icons/fi";

// const projects = [
//   {
//     id: 1,
//     title: "Luxury Residential Villa",
//     description: "A premium residential villa designed with modern architecture, refined materials, and optimized spatial flow.",
//     location: "Beverly Hills, CA",
//     price: "$4.5M",
//     sqft: "8,500",
//     bedrooms: 6,
//     bathrooms: 7,
//     garage: 4,
//     rating: 4.9,
//     completion: "2024",
//     images: [
//       "/images/projects/project1-1.jpg",
//       "/images/projects/project1-2.jpg",
//       "/images/projects/project1-3.jpg",
//       "/images/projects/project1-4.jpg",
//     ],
//     features: ["Smart Home", "Infinity Pool", "Wine Cellar", "Home Theater", "Gym"],
//     tags: ["Premium", "Waterfront", "Luxury"]
//   },
//   {
//     id: 2,
//     title: "Commercial Office Complex",
//     description: "A thoughtfully planned commercial space built for scalability, efficiency, and long-term asset value.",
//     location: "Downtown NYC",
//     price: "$25M",
//     sqft: "85,000",
//     floors: 12,
//     units: 48,
//     rating: 4.7,
//     completion: "2024",
//     images: [
//       "/images/projects/project2-1.jpg",
//       "/images/projects/project2-2.jpg",
//       "/images/projects/project2-3.jpg",
//       "/images/projects/project2-4.jpg",
//     ],
//     features: ["LEED Certified", "Conference Center", "Parking Garage", "Rooftop Garden"],
//     tags: ["Commercial", "Green Building", "Prime Location"]
//   },
//   {
//     id: 3,
//     title: "Modern Urban Lofts",
//     description: "Contemporary lofts with industrial aesthetics and smart living solutions in the heart of the city.",
//     location: "Chicago, IL",
//     price: "$2.8M",
//     sqft: "6,200",
//     bedrooms: 4,
//     bathrooms: 4,
//     garage: 2,
//     rating: 4.8,
//     completion: "2023",
//     images: [
//       "/images/projects/project3-1.jpg",
//       "/images/projects/project3-2.jpg",
//     ],
//     features: ["High Ceilings", "Exposed Brick", "Smart Kitchen", "Private Terrace"],
//     tags: ["Urban", "Industrial", "Modern"]
//   }
// ];

// export default function ProjectsPage() {
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [autoSlide, setAutoSlide] = useState(true);
//   const [hoveredProject, setHoveredProject] = useState(null);
//   const [isGridView, setIsGridView] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   const heroRef = useRef(null);
//   const projectsRef = useRef(null);
  
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

//   const isInView = useInView(heroRef, { once: true });

//   // Auto slide images for selected project
//   useEffect(() => {
//     if (!selectedProject || !autoSlide) return;
    
//     const interval = setInterval(() => {
//       setActiveImageIndex((prev) => 
//         prev === selectedProject.images.length - 1 ? 0 : prev + 1
//       );
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, [selectedProject, autoSlide]);

//   const filteredProjects = projects.filter(project =>
//     project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   const openModal = (project) => {
//     setSelectedProject(project);
//     setOpen(true);
//     setActiveImageIndex(0);
//   };

//   const nextImage = () => {
//     if (selectedProject) {
//       setActiveImageIndex((prev) => 
//         prev === selectedProject.images.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevImage = () => {
//     if (selectedProject) {
//       setActiveImageIndex((prev) => 
//         prev === 0 ? selectedProject.images.length - 1 : prev - 1
//       );
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen overflow-hidden">
//       <Navbar />

//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
//       </div>

//       {/* Parallax Hero Section */}
//       <motion.section 
//         ref={heroRef}
//         style={{ scale, opacity }}
//         className="relative h-screen pt-20 flex items-center justify-center overflow-hidden"
//       >
//         <motion.div
//           initial={{ scale: 1.2 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src="/images/projects-hero.jpg"
//             alt="REO Projects"
//             fill
//             className="object-cover"
//             priority
//           />
//         </motion.div>
        
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

//         <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="mb-8"
//           >
//             <span className="inline-block px-4 py-2 bg-red-500/10 backdrop-blur-sm rounded-full text-red-500 font-semibold border border-red-500/20">
//               Premium Real Estate
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ y: 50, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="text-white text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
//           >
//             <span className="bg-gradient-to-r from-white via-gray-100 to-red-100 bg-clip-text text-transparent">
//               Signature
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto mb-10"
//           >
//             Curated real estate developments designed for long-term value and architectural excellence.
//           </motion.p>

//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 1, delay: 0.8 }}
//             className="flex flex-wrap gap-4 justify-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
//               className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-semibold flex items-center gap-3 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
//             >
//               Explore Projects
//               <motion.span
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//               >
//                 <FaArrowRight className="group-hover:rotate-90 transition-transform" />
//               </motion.span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => router.push("/contact-us")}
//               className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
//             >
//               Schedule Tour
//             </motion.button>
//           </motion.div>

//           {/* Floating stats */}
//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 1, delay: 1 }}
//             className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
//           >
//             {[
//               { value: "50+", label: "Projects" },
//               { value: "$2B+", label: "Portfolio Value" },
//               { value: "98%", label: "Client Satisfaction" },
//               { value: "15", label: "Years Experience" }
//             ].map((stat, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ y: -5 }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl text-center"
//               >
//                 <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
//                 <div className="text-gray-300 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="text-white/60 text-sm">Scroll to explore</div>
//           <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto mt-2" />
//         </motion.div>
//       </motion.section>

//       {/* Projects Gallery Section */}
//       <section ref={projectsRef} className="max-w-7xl mx-auto px-6 py-24 relative z-10">
//         {/* Controls */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6"
//         >
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent mb-2">
//               Featured Developments
//             </h2>
//             <p className="text-gray-600">Discover our curated portfolio of premium properties</p>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search projects..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-4 pr-10 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-64"
//               />
//               <FaArrowRight className="absolute right-3 top-3.5 text-gray-400" />
//             </div>

//             <button
//               onClick={() => setIsGridView(!isGridView)}
//               className="px-4 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
//             >
//               {isGridView ? "List View" : "Grid View"}
//             </button>
//           </div>
//         </motion.div>

//         {/* Projects Grid/List */}
//         <div className={`${isGridView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}`}>
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -8 }}
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//               className={`bg-white rounded-3xl shadow-2xl overflow-hidden group cursor-pointer ${
//                 isGridView ? 'h-full' : ''
//               }`}
//             >
//               {/* Image Container with Overlay */}
//               <div className="relative h-64 md:h-80 overflow-hidden">
//                 <motion.div
//                   animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
//                   transition={{ duration: 0.6 }}
//                   className="relative h-full"
//                 >
//                   <Image
//                     src={project.images[0]}
//                     alt={project.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </motion.div>
                
//                 {/* Image Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
//                 {/* Tags */}
//                 <div className="absolute top-4 left-4 flex flex-wrap gap-2">
//                   {project.tags.map((tag, idx) => (
//                     <motion.span
//                       key={idx}
//                       initial={{ x: -20, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: idx * 0.1 }}
//                       className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-semibold rounded-full"
//                     >
//                       {tag}
//                     </motion.span>
//                   ))}
//                 </div>

//                 {/* Price */}
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="absolute bottom-4 right-4"
//                 >
//                   <div className="text-2xl font-bold text-white bg-black/40 backdrop-blur-sm px-4 py-2 rounded-xl">
//                     {project.price}
//                   </div>
//                 </motion.div>

//                 {/* View Button */}
//                 <motion.button
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ 
//                     scale: hoveredProject === project.id ? 1 : 0,
//                     opacity: hoveredProject === project.id ? 1 : 0 
//                   }}
//                   onClick={() => openModal(project)}
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl"
//                 >
//                   <FaExpand size={20} />
//                 </motion.button>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
//                     {project.title}
//                   </h3>
//                   <button className="text-gray-400 hover:text-red-600 transition-colors">
//                     <FiShare2 size={20} />
//                   </button>
//                 </div>

//                 <div className="flex items-center gap-2 text-gray-600 mb-4">
//                   <FaMapMarkerAlt className="text-red-500" />
//                   <span>{project.location}</span>
//                 </div>

//                 <p className="text-gray-600 mb-6 line-clamp-2">
//                   {project.description}
//                 </p>

//                 {/* Stats */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                   <div className="text-center">
//                     <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
//                       <FaRulerCombined />
//                       <span className="text-sm">Area</span>
//                     </div>
//                     <div className="font-semibold">{project.sqft} sqft</div>
//                   </div>
//                   {project.bedrooms && (
//                     <div className="text-center">
//                       <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
//                         <FaBed />
//                         <span className="text-sm">Beds</span>
//                       </div>
//                       <div className="font-semibold">{project.bedrooms}</div>
//                     </div>
//                   )}
//                   {project.bathrooms && (
//                     <div className="text-center">
//                       <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
//                         <FaBath />
//                         <span className="text-sm">Baths</span>
//                       </div>
//                       <div className="font-semibold">{project.bathrooms}</div>
//                     </div>
//                   )}
//                   <div className="text-center">
//                     <div className="flex items-center justify-center gap-1 text-gray-500 mb-1">
//                       <FaStar />
//                       <span className="text-sm">Rating</span>
//                     </div>
//                     <div className="font-semibold">{project.rating}</div>
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.features.slice(0, 3).map((feature, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
//                     >
//                       {feature}
//                     </span>
//                   ))}
//                   {project.features.length > 3 && (
//                     <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
//                       +{project.features.length - 3} more
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <button
//                     onClick={() => openModal(project)}
//                     className="group px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold flex items-center gap-2 hover:shadow-xl transition-all duration-300"
//                   >
//                     View Details
//                     <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//                   </button>
                  
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => router.push("/contact-us")}
//                     className="px-6 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors"
//                   >
//                     Contact
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Empty state */}
//         {filteredProjects.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <div className="text-6xl mb-4">🏢</div>
//             <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
//             <p className="text-gray-600">Try adjusting your search criteria</p>
//           </motion.div>
//         )}
//       </section>

//       {/* Enhanced Modal */}
//       <AnimatePresence>
//         {open && selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//             onClick={() => setOpen(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Header */}
//               <div className="p-6 border-b flex justify-between items-center">
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
//                   <div className="flex items-center gap-2 text-gray-600 mt-1">
//                     <FaMapMarkerAlt className="text-red-500" />
//                     <span>{selectedProject.location}</span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
//                 >
//                   ✕
//                 </button>
//               </div>

//               {/* Image Gallery */}
//               <div className="relative h-96 bg-gray-900 overflow-hidden">
//                 <motion.div
//                   key={activeImageIndex}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative h-full"
//                 >
//                   <Image
//                     src={selectedProject.images[activeImageIndex]}
//                     alt={selectedProject.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </motion.div>

//                 {/* Navigation Arrows */}
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                 >
//                   <FaChevronLeft />
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
//                 >
//                   <FaChevronRight />
//                 </button>

//                 {/* Auto-play toggle */}
//                 <button
//                   onClick={() => setAutoSlide(!autoSlide)}
//                   className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
//                 >
//                   {autoSlide ? <FaPause /> : <FaPlay />}
//                 </button>

//                 {/* Image Indicators */}
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//                   {selectedProject.images.map((_, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setActiveImageIndex(idx)}
//                       className={`w-2 h-2 rounded-full transition-all ${
//                         idx === activeImageIndex 
//                           ? 'bg-white w-8' 
//                           : 'bg-white/50 hover:bg-white/80'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Modal Content */}
//               <div className="p-8 overflow-y-auto max-h-[calc(90vh-500px)]">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                   {/* Left Column - Details */}
//                   <div className="lg:col-span-2">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//                       <div className="bg-gray-50 p-4 rounded-2xl text-center">
//                         <div className="text-2xl font-bold text-red-600 mb-1">{selectedProject.price}</div>
//                         <div className="text-gray-600 text-sm">Price</div>
//                       </div>
//                       <div className="bg-gray-50 p-4 rounded-2xl text-center">
//                         <div className="text-2xl font-bold text-gray-900 mb-1">{selectedProject.sqft}</div>
//                         <div className="text-gray-600 text-sm">Square Feet</div>
//                       </div>
//                       <div className="bg-gray-50 p-4 rounded-2xl text-center">
//                         <div className="text-2xl font-bold text-gray-900 mb-1">{selectedProject.completion}</div>
//                         <div className="text-gray-600 text-sm">Completion</div>
//                       </div>
//                       <div className="bg-gray-50 p-4 rounded-2xl text-center">
//                         <div className="text-2xl font-bold text-gray-900 mb-1">{selectedProject.rating}</div>
//                         <div className="text-gray-600 text-sm">Rating</div>
//                       </div>
//                     </div>

//                     <div className="mb-8">
//                       <h4 className="text-xl font-bold mb-4">Description</h4>
//                       <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
//                     </div>

//                     <div className="mb-8">
//                       <h4 className="text-xl font-bold mb-4">Features</h4>
//                       <div className="flex flex-wrap gap-3">
//                         {selectedProject.features.map((feature, idx) => (
//                           <motion.span
//                             key={idx}
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             transition={{ delay: idx * 0.05 }}
//                             className="px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 font-medium rounded-xl border border-red-100"
//                           >
//                             {feature}
//                           </motion.span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right Column - Action */}
//                   <div className="lg:col-span-1">
//                     <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 sticky top-8">
//                       <h4 className="text-xl font-bold mb-6">Request Information</h4>
                      
//                       <div className="space-y-4">
//                         <button
//                           onClick={() => router.push("/contact-us")}
//                           className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
//                         >
//                           <FaArrowRight />
//                           Schedule Virtual Tour
//                         </button>
                        
//                         <button
//                           onClick={() => router.push("/contact-us")}
//                           className="w-full py-4 bg-white border-2 border-red-600 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors"
//                         >
//                           Download Brochure
//                         </button>
                        
//                         <button
//                           onClick={() => router.push("/contact-us")}
//                           className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
//                         >
//                           Make an Offer
//                         </button>
//                       </div>

//                       <div className="mt-8 pt-6 border-t border-gray-200">
//                         <h5 className="font-semibold mb-4">Need assistance?</h5>
//                         <p className="text-gray-600 text-sm mb-4">
//                           Our dedicated team is available to answer all your questions and schedule personalized viewings.
//                         </p>
//                         <a
//                           href="tel:+1234567890"
//                           className="text-red-600 font-semibold hover:text-red-700 transition-colors"
//                         >
//                           📞 +1 (234) 567-890
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Floating CTA */}
//       <motion.div
//         initial={{ y: 100, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         className="fixed bottom-6 right-6 z-40"
//       >
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => router.push("/contact-us")}
//           className="px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-2xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all flex items-center gap-3"
//         >
//           <span>💬</span>
//           Chat with Agent
//         </motion.button>
//       </motion.div>

//       <Footer />
//     </div>
//   );
// }