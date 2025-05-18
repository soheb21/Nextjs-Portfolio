'use client'
import { Github, Linkedin, Instagram, Twitter, ExternalLink } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const socialMediaInfo = [
    {
      name: "Github",
      link: "https://github.com/ansarishoeb",
      Icon: Github,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ansari-shoeb-520414228/",
      Icon: Linkedin,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ansarishoeb/",
      Icon: Instagram,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ansarishoeb",
      Icon: Twitter,
    },
  ];
  
    return (
      <div id='hero' className='w-full'>
      <div className="flex items-center gap-2 mb-2">
          <span className='bg-green-500 rounded-full h-2 w-2'></span>
          <p>Welcome</p>
      </div>
      <h1 className='overflow-x-hidden text-[1.3rem] sm:[1.6rem] md:text-[2.2rem] lg:text=[2.8rem] tracking-[2px] mb-2'>
          Hey, I'm Ansari Shoeb
      </h1>
      <h1 className=' scr uppercase overflow-x-hidden h-[3.5rem]   mt-4 w-full mx-auto   text-orange-200 text-[1.2rem] sm:[1.7rem] md:text-[2.2rem] lg:text=[2.8rem]  tracking-[7px] md:tracking-[15px] md:mb-2'>
          <Typewriter

              words={['frontend developer', 'backend developer', 'mern stack developer', 'software developer']}
              cursor
              loop={50}

          />
      </h1>
      <div className="w-fit bg-slate-50 px-5 py-2 rounded-[20px] flex items-center gap-5 mt-4 md:mt-8 lg:mt-10">
  {socialMediaInfo.map(({ name, link, Icon }) => (
    <a href={link} key={name} target="_blank" rel="noopener noreferrer">
      <Icon className="w-7 h-7 text-gray-700 transition-all hover:scale-125 hover:text-orange-300" />
    </a>
  ))}
</div>

<div className="mt-4 md:mt-8 lg:mt-10 flex gap-3">
  <a href="https://github.com/soheb21" target="_blank">
    <button className="bg-slate-50  px-2 py-1 rounded-[30px] transition-all delay-50 hover:scale-110 w-fit flex items-center  text-gray-700">
      <Github className="w-7 h-7 text-gray-700 transition-all hover:scale-110" />
      <span >Github</span>
    </button>
  </a>
  <a
    href="/Shoeb.pdf"
    target="_blank"
    className="bg-slate-50  px-2 py-1 text-gray-700 rounded-[30px] transition-all delay-50 hover:scale-110 w-fit flex items-center "
  >
    <ExternalLink className="w-7 h-7 text-gray-700 transition-all hover:scale-110" />
    <span>Resume</span>
  </a>
</div>

      <p className='mt-8 w-full h-[300px] md:h-[250px] md:text-2xl tracking-[2px]'>
          Dedicated and enthusiastic software developer with hands-on experience in building web applications using the MERN stack. Skilled in creating user-centric applications. Proficient in Redux and Redux Toolkit for state management. Passionate about learning new technologies and continuously improving my skills to deliver high-quality software solutions.
      </p>
      <hr className='mt-4  text-gray-700  ' />
  </div >
    );
  }