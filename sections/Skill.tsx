import Card from "@/components/Card";
import Title from "@/components/Title";
import skills from '@/data/skills.json';

export default function Skill(){
    return (
        <div id='skill' className='w-full flex flex-col '>
        <Title title={"Skill"} />
        {
             <div className="h-full grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4">
                {
                    skills.map((item) => <Card key={item.title} skill={{title:item.title,icon_img_URL:item.icon_img_URL}}/>)
                }
            </div>
        }


    </div>
    )
}