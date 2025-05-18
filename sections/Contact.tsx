'use client'
import Title from "@/components/Title";
import { formData } from "@/types/contact";
import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from '@emailjs/browser'; 

export default function Contact() {
  const initialFormData: formData = {
    senderName: "",
    subject: "",
    message: ""
  };

  const [formData, setFormData] = useState<formData>(initialFormData);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { senderName, subject, message } = formData;

    if (!senderName || !subject || !message) {
      alert("Please provide all fields");
      return;
    }

    // ✅ Send email using EmailJS
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: senderName,            // instead of from_name
          subject,                    // if you want to use {{subject}} in the template, add it there
          message,
          time: new Date().toLocaleString(), // if you want to use {{time}}
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log(result.text);
      alert("Message sent successfully!");
      setFormData(initialFormData);

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id='contact' className='w-full flex flex-col'>
      <Title title={'Contact Me'} />

      <div className='flex gap-3 flex-col md:flex-row'>
        <div className="left w-full flex flex-col justify-center">
          <h2 className='flex items-center gap-2 text-3xl mb-4'>
            Get in Touch <img className='w-12' src={'/msg-icon.png'} alt="message icon" />
          </h2>
          <p className='text-sm md:text-lg'>
            {`Have a project in mind or need help with your website? I’m here to assist! Whether you're looking for a new website, redesign, or custom development, feel free to reach out. Simply fill out the form or find our contact information below. I’ll get back to you as soon as possible. Let’s build something great together!`}
          </p>
          <ul className='flex flex-col justify-center gap-2'>
            <li className='flex gap-4 md:text-lg lg:text-xl pt-4 items-center'>
              <MailIcon /> <span>ansarishoeb53@gmail.com</span>
            </li>
            <li className='flex gap-4 md:text-lg lg:text-xl pt-4 items-center'>
              <PhoneIcon /> <span>+91 8452955876</span>
            </li>
            <li className='flex gap-4 md:text-lg lg:text-xl pt-4 items-center'>
              <LocateIcon /> <span>Kausa Market near Jama Masjid, Rhemat Mahal, Ground Floor, Mumbra, Thane 400612, Mumbai</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="right w-full md:ml-10 flex flex-col gap-2">
          <label className='mt-4 mb-1'>Name</label>
          <input
            onChange={handleChange}
            name='senderName'
            value={formData.senderName}
            placeholder='Enter your name'
            className='outline-none border rounded-md dark:text-white text-slate-800 border-orange-500 bg-transparent px-4 py-2 text-l'
            type="text"
          />
          <label className='mt-4 mb-1'>Subject</label>
          <input
            onChange={handleChange}
            name='subject'
            value={formData.subject}
            placeholder='Enter your subject'
            className='outline-none border rounded-md dark:text-white text-slate-800 border-orange-500 bg-transparent px-4 py-2 text-l'
            type="text"
          />
          <label className='mt-4 mb-1'>Message</label>
          <textarea
            onChange={handleChange}
            name='message'
            value={formData.message}
            placeholder='Enter your message'
            className='outline-none border rounded-md dark:text-white text-slate-800 border-orange-500 bg-transparent px-4 py-2 text-l'
            rows={5}
          />
          <button
            type='submit'
            className='bg-orange-500 px-1 mt-4 py-2 text-lg text-white rounded-md transition-all ease-in duration-300 hover:scale-105 cursor-pointer w-full mb-8 md:mb-10'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
