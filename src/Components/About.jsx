import React from "react";
import { useSelector } from "react-redux";
import s from "./About.module.css";

export default function About() {
  const language = useSelector((state) => state.language);

  return (
    <div className={s.container} id="about">
      <div className={s.title}>
        <h1>{language === "english" ? "About" : "Sobre mi"}</h1>
      </div>
      <div className={s.text}>
        {language === "english" ? (
          <>
            <p>
              This year I took a turn in my career and entered the IT world. It
              was a difficult but very satisfying decision and today I am
              grateful and surprised with the progress and skills I acquired. I
              am responsible and dedicated. I like to travel and learn about
              other cultures.
            </p>
            <p>Why web development?</p>
            <p>
              I have a lot of curiosity and energy to learn new things. Web
              development is an area that fascinates me because of the ability
              to make ideas and solutions that can change the lives of many
              people. Besides being something in constant growth and innovation.
            </p>
          </>
        ) : (
          <>
            <p>
              Este año di un giro en mi carrera y entré en el mundo de la IT.
              Fue una decisión difícil pero muy satisfactoria y hoy estoy
              agradecido y sorprendido con los progresos y las habilidades que
              adquirí. Soy responsable y dedicado. Me gusta viajar y conocer
              otras culturas.
            </p>
            <p>¿Por qué desarrollo web?</p>
            <p>
              Tengo mucha curiosidad y energías para aprender cosas nuevas. El
              desarrollo web es un área que me fascina por la capacidad de poder
              hacer realidad ideas y soluciones que pueden modificar la vida de
              muchas personas. Además de ser algo en constante crecimiento e
              innovación.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
