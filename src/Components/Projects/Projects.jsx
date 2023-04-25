import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from "./Projects.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useProjects } from "../../hooks/useProjects";
import { Project } from "../Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

export default function Projects() {
  const language = useSelector((state) => state.language);
  const projects = useProjects();

  return (
    <div className={s.container}>
      <div className={s.text}>
        <h1>{language === "english" ? "Projects" : "Proyectos"}</h1>
      </div>
      <div className={s.content}>
        {projects.map((projectType, index) => {
          return (
            <div className={s.area} key={index}>
              <h3 className={s.nothing}>{projectType.title}</h3>
              <div className={s.coverSwiper}>
              <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
              >
                {projectType.info.map((project, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                    >
                      <Project
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        libraries={project.libraries}
                        video={project.video}
                        type={project.type}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
