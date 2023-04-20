import React from "react";
import s from "./Project.module.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export const Project = ({ name, description, link, libraries, video, orientation }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className={orientation === 'vertical'? `${s.verticalDiv} ${s.description}` : s.description}>
      <span className={orientation === 'vertical' && s.spanVertical}>{name}</span>
      <p className={orientation === 'vertical' && s.pVertical}>
        {description}
        {libraries && (
          <>
            <br />
            <strong>Libraries</strong>
            <br />
            {libraries}
          </>
        )}
      </p>
      <a href={link} target="_blank" rel="noreferrer">
        <video className={orientation === 'vertical'? `${s.videoVertical} ${s.video}` : s.video} src={video} autoPlay muted loop></video>
        <div className={s.iconBack}>
          <RocketLaunchIcon fontSize="large" />
        </div>
      </a>
    </div>
  );
};
