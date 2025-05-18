'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import ProjectCard from '@/components/ProjectCard';
import Title from '@/components/Title';
import projects from '@/data/projects.json';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <Title title="Projects" />

      <Swiper
        modules={[Navigation, EffectCoverflow,Autoplay]}
        navigation={true}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 130,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
