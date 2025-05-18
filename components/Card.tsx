import { skill } from "@/types/skill";

export default function Card({skill}:{skill:skill}) {
    return (
        <div className="bg-transparent border rounded-2xl p-4 flex flex-col items-center gap-1.5 cursor-grabbing shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all ease-in-out duration-300 hover:scale-105">
             <img loading='lazy' height={'100'} width={'100'} className='object-cover   sm:h-24  ' src={skill.icon_img_URL} alt="icon_image" />
            <h3 className='text-center'>{skill.title}</h3>
        </div>
    )
}