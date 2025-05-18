'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navContent=[
    {
      name:"Home",
      link:"#"
    },
    {
      name:"About",
      link:"#about"
    },
    {
      name:"Education",
      link:"#education"
    },
    {
      name:"Skill",
      link:"#skill"
    },
    {
      name:"Projects",
      link:"#projects"
    },
    {
      name:"Contact",
      link:"#contact"
    }
  ]


  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

    return (
      <nav className={`px-4 py-2 fixed top-0 w-full z-30  shadow-md   ${sticky && "bg-gray-800  transition-all duration-600"}`}>
        <div className="container mx-auto flex flex-row-reverse md:flex-row justify-between items-center relative">
          <Image className="h-12 w-12 "   src="/gfg.png" alt="Logo" width={30} height={25} />
          <Image onClick={()=>setIsNavbarOpen((prev)=>!prev)} className="md:hidden sticky left-0 z-40"   src="/menu-icon.png" alt="Logo" width={30} height={25} />
        
          <div className={` transition-all duration-300 h-dvh md:h-fit absolute md:static md:top-0  bottm-0 flex flex-col gap-5 md:gap-0 -top-2 -left-4 p-16 md:p-0 border-0   md:flex-row  ${isNavbarOpen ? "-left-4 bg-gray-800 pt-24 text-2xl" : "left-[-100%]"}`}>
            {
              navContent.length>0 && navContent.map((item,index)=>
              <a key={index} href={item.link} className="hover:text-orange-400 md:mx-6 md:text-lg ">{item.name}</a>
              )}
          </div>
        </div>
      </nav>
    );    
  }