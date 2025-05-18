export default function Footer() {
    return (
        <div className='border-t-2  mx-9 p-4 mt-10 mb-4 flex flex-col items-center   '>
        <p className='font-semibold text-center tracking-[3px] px-5 mt-2'>I am a passionate web developer who thrives on crafting seamless, innovative, and user-centric digital experiences</p>
        <p className='my-10'> © {new Date().getFullYear()}. All rights reserved</p>
    </div>

    );
  }