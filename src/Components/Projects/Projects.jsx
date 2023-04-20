import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./Projects.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useProjects } from "../../hooks/useProjects";
import { Project } from "../Project/Project";

export default function Projects() {
  const language = useSelector((state) => state.language);
  const { teamWork, both, front } = useProjects();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={s.container}>
      <div className={s.text}>
        <h1>{language === "english" ? "Projects" : "Proyectos"}</h1>
      </div>
      <div className={s.content}>
        <div className={s.area}>
          <h3 className={s.nothing}>{teamWork.title}</h3>
          <div className={s.show}>
            {teamWork.info.map((project, index) => {
              return (
                <Project
                  key={index}
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  libraries={project.libraries}
                  video={project.video}
                />
              );
            })}
          </div>
        </div>
        <div className={s.area}>
          <h3 className={s.nothing}>{both.title}</h3>
          <section className={s.show}>
            {both.info.map((project, index) => {
              return (
                <Project
                  key={index}
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  orientation={project.orientation}
                  video={project.video}
                />
              );
            })}
          </section>
        </div>
        <div className={s.area}>
          <h3 className={s.nothing}>Front-End</h3>
          <div className={s.show}>
            {front.info.map((project, index) => {
              return (
                <Project
                  key={index}
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  video={project.video}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
