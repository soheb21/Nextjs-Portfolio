
export default function Title({ title }: { title: string }) {
  return (
    <div className="relative flex justify-center  mb-20 md:my-24  ">
    <h1 className='absolute -top-7 bg-gray-900 z-10 sm:-top-7 md:-top-8 lg:-top-11 uppercase rounded-md text-center text-[2rem] w-fit sm:text-[2.75rem] md:text-[3rem] lg:text-[3.5rem] tracking-[6px] font-bold'>{title}</h1>
    <span className=' w-full h-1  bg-slate-200'></span>
</div>
  );
}