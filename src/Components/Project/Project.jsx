import React from "react";
import s from "./Project.module.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export const Project = ({ name, description, link, libraries, video, type }) => {
  return (
    <div className={type === 'mobile'? `${s.mobileDiv} ${s.description}` : s.description}>
      <span className={type === 'mobile'? s.spanMobile : undefined}>{name}</span>
      <p className={type === 'mobile'? s.pMobile : undefined}>
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
        <video className={type === 'mobile'? `${s.videoMobile} ${s.video}` : s.video} src={video} autoPlay muted loop></video>
        <div className={s.iconBack}>
          <RocketLaunchIcon fontSize="large" />
        </div>
      </a>
    </div>
  );
};
