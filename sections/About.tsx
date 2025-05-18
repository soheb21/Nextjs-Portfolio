import Title from "@/components/Title";

export default function About(){
    return (
     
        <section id="about" className="grid sm:grid-cols-1 place-content-center md:grid-cols-2 mb-8 sm:mb-20 gap-14">
            <img loading="lazy" width={'350'} height={'350'} className='w-[350px] ' src={'/1.png'} alt="about-image" />
            <div className="flex flex-col gap-8">
                <p>{"Hello! I'm Ansari Shoeb Ahmed , a passionate software engineer. I develop web applications, and learning to develope Full Stack app. My core skill is based on MERN-Stack and I love to do most of the things using MERN-Stack. I love to make the web more open to the world. Self-motivated and curious, with a keen interest in building user-centric products. Looking forward to honing skills in a challenging work environment."}</p>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <li>
                        <h3 className="text-orange-400 font-semibold">Name:</h3>
                        <p>{"Shoeb Sami Ahmed Ansari"}</p>
                    </li>
                    <li>
                        <h3 className="text-orange-400 font-semibold">Degree:</h3>
                        <p>{"BE Information Technology"}</p>
                    </li>  <li>
                        <h3 className="text-orange-400 font-semibold">E-mail:</h3>
                        <p>{"ansarishoeb53@gmail.com"}</p>
                    </li>  <li>
                        <h3 className="text-orange-400 font-semibold">Phone no:</h3>
                        <p>+91{" "}{"8452955876"}</p>
                    </li>
                </ul>
            </div>

        </section>
    )
}