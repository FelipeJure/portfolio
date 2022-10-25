import React from "react";
import { useSelector } from "react-redux";
import s from "./Projects.module.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function Projects() {
  const language = useSelector((state) => state.language);
  const videoMovies = 'https://res.cloudinary.com/dholyxgxe/video/upload/v1666450661/Portfolio/moviesAppVideoCorto_syzfsr.mp4'
  const videoLet = "https://res.cloudinary.com/pflet/video/upload/v1663803785/Let/Others/lets_GO_bzvzfp.mp4";
  const videoWeather = 'https://res.cloudinary.com/dholyxgxe/video/upload/v1666450471/Portfolio/weatherAppVideo_px3oha.mp4'
  const videoDogs = 'https://res.cloudinary.com/dholyxgxe/video/upload/v1666449774/Portfolio/DogsApp_ocavt9.mp4';

  return (
    <div className={s.container}>
      <div className={s.text}>
        <h1>{language === "english" ? "Projects" : "Proyectos"}</h1>
      </div>
      <div className={s.content}>
        <div className={s.area}>
          <h3 className={s.nothing}>Front-End</h3>
          <div className={s.show}>
            <div>
              <span>Weather App</span>
              {language === "english" ? (
                <p>
                  It's my first application and I made it with Javascript, React
                  and Redux with pure CSS.
                </p>
              ) : (
                <p>
                  Es mi primer aplicación y la realizé con Javascript, React y
                  Redux con CSS puro
                </p>
              )}
              <a
                href="https://weatherapp-jet-eight.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <video
                  className={s.video}
                  src={videoWeather}
                  autoPlay
                  muted
                  loop
                ></video>
                <div className={s.iconBack}>
                  <RocketLaunchIcon fontSize="large" />
                </div>
              </a>
            </div>
            <div>
              <span>Movies App</span>
              {language === "english" ? (
                <p>
                  It's an application made with Javascript, React and Redux with
                  the helpfull of libraries just like Bootstrap and Swiper.
                </p>
              ) : (
                <p>
                  Es una aplicación hecha con Javascript, React, Redux y la
                  ayuda de librerías como Bootstrap y Swiper.
                </p>
              )}
              <a
                href="https://moviesapp-dusky.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <video
                  className={s.video}
                  src={videoMovies}
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
        </div>
        <div className={s.area}>
          <h3 className={s.nothing}>
            {language === "english"
              ? "Front-End & Back-End with DB"
              : "Front-End y Back-End con base de datos"}
          </h3>
          <section className={s.show}>
            <div>
              <span>Dogs App</span>
              {language === "english" ? (
                <p>
                  It's a Single Page Application, made mainly with Javascript,
                  React, Redux, NodeJs, Express and PostgreSQL as database. It
                  consumes data from an external API and has a database where
                  new dogs can be created, modified or deleted. The App displays
                  the characteristics of the dogs and can be sorted (by name,
                  weight and height) and filtered (by temperament, breed or
                  origin). It also has a search bar by name. The backend was
                  deployed in Railway. The frontend was deployed in Vercel
                </p>
              ) : (
                <p>
                  Es una Single Page Application, hecha con Javascript, React,
                  Redux, NodeJS, Express y PostgreSQL como base de datos.
                  Consume información de una API externa y cuenta con una base
                  de datos donde se pueden crear nuevos perros, modificarlos o
                  eliminarlos. La App muestra las características de los perros,
                  pudiendo ordenarlos (por nombre, peso y altura) y filtrarlos
                  (por temperamento, raza y origen). Tambien tiene una barra de
                  búsqueda por nombre. El backend fue deployado en Railway. El
                  frontend fue deployado en Vercel
                </p>
              )}
              <a
                href="https://pi-dogs-previus.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <video
                  className={s.video}
                  src={videoDogs}
                  autoPlay
                  muted
                  loop
                ></video>
                <div className={s.iconBack}>
                  <RocketLaunchIcon fontSize="large" />
                </div>
              </a>
            </div>
          </section>
        </div>
        <div className={s.area}>
          <h3 className={s.nothing}>
            {language === "english" ? "Team Work" : "En equipo"}
          </h3>

          <div className={s.show}>
            <div>
              <span>let's GO</span>
              {language === "english" ? (
                <p>
                  It's an e-commerce of bike and adventures rental with a forum
                  to share your experience and rate your bike. It was made in
                  team with other 7 persons using SCRUM and Trello to
                  organizate. It use Javascript, React, Redux, CSS, NodeJs,
                  Sequelize, Express and PostgreSQL.
                  <br />
                  <strong>Libraries</strong>
                  <br />
                  Socket.IO | Cloudinary | Autoh0 | Sweet Alert | CoreUI |
                  EmailJS | MaterialUI
                </p>
              ) : (
                <p>
                  Es un e-commerce de alquiler de bicicletas y aventuras con un
                  foro para compartir experiencias y puntuar tu bici. Hecha por
                  un grupo con otras 7 personas, usando metodología SCRUM y
                  Trello para su organización. Se utilizó Javascript, React,
                  Redux, CSS, NodeJs, Sequelize, Express y PostgreSQL.
                  <br />
                  <strong>Librerías</strong>
                  <br />
                  Socket.IO | Cloudinary | Autoh0 | Sweet Alert | CoreUI |
                  EmailJS | MaterialUI
                </p>
              )}
              <a
                href="https://pf-let.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <video
                  className={s.video}
                  src={videoLet}
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
        </div>
      </div>
    </div>
  );
}
