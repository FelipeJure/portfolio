import React from "react";
import s from "./Project.module.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export const Project = ({name, description ,link , libraries, video}) => {
    return (
        <div className={s.show}>
            <div data-aos="zoom-in" data-aos-duration="2000" className={s.description}>
              <span>{name}</span>
              <p>
                {description}
                {libraries && (
                <>
                <br />
                  <strong>Libraries</strong>
                <br />
                {libraries}
                </>)
            }
              </p>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <video
                  className={s.video}
                  src={video}
                  autoPlay
                  muted
                  loop
                ></video>
                <div className={s.iconBack}>
                  <RocketLaunchIcon fontSize="large" />
                </div>
              </a>
            </div>
          </div>
    )
}