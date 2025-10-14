 

import { motion as Motion } from 'framer-motion'
import Card from './ui/Card'

const Projects = () => {
  const projectData1 = {
      title: "🎬 Cracked Media",
    description:"AI-Powered platform where you can edit your images and compress your videos",
    tech: ["Next.js","Neon DB","Motion","Tailwind CSS","Prisma","Cloudinary"],
    gitLink:"https://github.com/Priyanshu090803/cracked-media",
    liveLink:"https://cracked-media-1.vercel.app/home",
    bgUrl:"https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720820.jpg",
      from:"#1d9679",
    to:"#899cb2"
  };

  const projectData6 = {
    title: "Octoreal",
    description:"A Web development agency",
    tech: ["Next.js","Tailwind CSS","Cloudinary","TypeScript","Framer Motion"],
    liveLink:"https://octoreal.com/",
    bgUrl:"https://wallpapers.com/images/hd/dark-purple-and-black-plain-75znhgkjjxu552fr.jpg",
    from:"#111",
    to:"#f0f0f0"
  };
  const projectData7 = {
    title: "Om Jewellers",
    description:"Real-world jewellery dashboard and landing page; backend-connected",
    tech: ["Next.js","React","Framer Motion","Tailwind CSS","Backend Integration"],
    liveLink:"https://www.omjewellersjdp.com/",
    link1:"https://www.omjewellersjdp.com/",
    link2:"https://forms.omjewellersjdp.com/",
    bgUrl:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=60",
    from:"#8a6d3b",
    to:"#f5e6c5"
  };
  const projectData2 = {
    title: "⚡ Enpal Dashboard",
    description:"Real-world solar data via NREL API with a custom backend",
    tech: ["Next.js","Tailwind CSS","Recharts","Prisma","NREL Real-time API","Prisma ORM"],
    gitLink:"https://github.com/Priyanshu090803/enpal-dashboard",
    liveLink:"https://enpal-dashboard-b5j3.vercel.app/",
    bgUrl:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60",
    from:"#0ea15a",
    to:"#a7f3d0"
  };

 

  const projectData4 = {
    title: "H00man App",
    description:"A application where human connect with human",
    tech: ["React","Tailwind","Redux","Axios" , "Express","MongoDb" ,"Websockets" ],
    gitLink:"https://github.com/Priyanshu090803/Hooman_app",
    liveLink:"https://hooman-app.onrender.com/",
    bgUrl:"https://www.eusemfronteiras.com.br/wp-content/uploads/2019/04/77348807_m.jpg",
    from:"#102541",
    to:"#fcef8a"
  };

  const projectData5 = {
    title: "Youtube Clone",
    description:"YouTube clone using React   ",
    tech: ["React","Tailwind","Redux","YouTube api" ,"Api polling","Debouncing"],
    gitLink:"https://github.com/Priyanshu090803/YouTube-Clone",
    liveLink:"https://you-tube-clone-phi-seven.vercel.app/",
    bgUrl:"https://letsplays.b-cdn.net/wp-content/uploads/2014/10/youtube-iphone-app-logo.png",
    from:"#a00004",
    to:"#fb7190"
  };

  const projectsArray = [projectData6, projectData7, projectData1, projectData4, projectData2, projectData5 ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.3    // Initial delay before first child starts
      }
    }
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Title animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='h-full w-full flex flex-col gap-10 md:gap-16 lg:gap-20 xl:gap-30 py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20'>
      <div className='h-full w-full flex justify-center'>
        <Motion.h3 
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-t from-[#131010] to-[#dddddd] text-center'
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Projects
        </Motion.h3>
      </div>
      
      <Motion.div 
        className='w-full h-full gap-6 sm:gap-8 md:gap-10 flex flex-wrap justify-center items-start'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsArray.map((project, index) => (
          <Motion.div
            key={index}
            variants={cardVariants}
            className='w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(30%-1.5rem)] max-w-[400px] min-w-[280px]'
          >
            <Card project={project} />
          </Motion.div>
        ))}
      </Motion.div>
    </div>
  )
}

export default Projects