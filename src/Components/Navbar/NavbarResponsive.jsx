import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./NavbarResponsive.module.css";

export default function NavbarResponsive() {
  const [btn, setBtn] = useState(false);
  const [active, setActive] = useState("");
  const language = useSelector((state) => state.language);

  const onChangeBtn = () => {
    if (btn) {
      setBtn(false);
      setActive("");
    } else setBtn(true);
  };

  const onClose = () => {
    setBtn(false);
    setActive("");
  };

  const onChange = (e) => {
    setActive(e.target.name);
  };

  return (
    <>
      <div className={btn ? s.back : undefined} onClick={onClose}></div>
      <div className={s.btnBack}>
        <div
          className={`${s.burguerBtn} ${btn ? s.equis : undefined }`}
          onClick={onChangeBtn}
        >
          <span className={`${s.btnTop}`}></span>
          <span className={`${s.btnMiddle}`}></span>
          <span className={`${s.btnBottom}`}></span>
        </div>
      </div>
      <div className={btn ? s.menu : s.hide}>
          <div
            className={
              btn ? `${s.items} ${s.transition}` : `${s.hiden} ${s.transition}`
            }
          >
            <li className={btn ? s.appear : undefined}>
              <span
                className={
                  active === "about" ? `${s.leftLine} ${s.left}` : `${s.left}`
                }
              ></span>
              <a
                href="#about"
                name="about"
                onClick={onChange}
                className={
                  active === "about" ? `${s.title} ${s.active}` : `${s.title}`
                }
              >
                {language === "english" ? "About" : "Sobre mi"}
              </a>
            </li>
            <li className={btn ? s.appear : undefined}>
              {" "}
              <span
                className={
                  active === "skills" ? `${s.leftLine} ${s.left}` : `${s.left}`
                }
              ></span>{" "}
              <a
                href="#skills"
                name="skills"
                onClick={onChange}
                className={
                  active === "skills"
                    ? `${s.title} ${s.active}`
                    : `${s.title} ${btn ? s.appear : undefined}`
                }
              >
                {language === "english" ? "Skills" : "Habilidades"}
              </a>
            </li>
            <li className={btn ? s.appear : undefined}>
              {" "}
              <span
                className={
                  active === "proyects"
                    ? `${s.leftLine} ${s.left}`
                    : `${s.left}`
                }
              ></span>{" "}
              <a
                href="#proyects"
                name="proyects"
                onClick={onChange}
                className={
                  active === "proyects"
                    ? `${s.title} ${s.active}`
                    : `${s.title} ${btn ? s.appear : undefined}`
                }
              >
                {" "}
                {language === "english" ? "Projects" : "Proyectos"}
              </a>
            </li>
            <li className={btn ? s.appear : undefined}>
              {" "}
              <span
                className={
                  active === "contact" ? `${s.leftLine} ${s.left}` : `${s.left}`
                }
              ></span>{" "}
              <a
                href="#contact"
                name="contact"
                onClick={onChange}
                className={
                  active === "contact"
                    ? `${s.title} ${s.active}`
                    : `${s.title} ${btn ? s.appear : undefined}`
                }
              >
                {language === "english" ? "Contact" : "Contacto"}
              </a>
            </li>
          </div>
      </div>
    </>
  );
}
