import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import s from './Skills.module.css';
import Aos from "aos";
import 'aos/dist/aos.css';

const html = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449844/Portfolio/html_uijzer.png';
const css = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449509/Portfolio/css_twuqaa.png';
const react = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/react_dh91w4.png';
const redux = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666450392/Portfolio/redux_lclafd.png';
const javascript = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/javascript_ohz2xw.png';
const github = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449510/Portfolio/github_z8me7k.png';
const git = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449510/Portfolio/git_kt6gso.png';
const chatGPT = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1690304042/Portfolio/cdnlogo.com_ChatGPT_n2zms9.png';
const node = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/node_uwcswm.png';
const postgreSQL = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/postgreSQL_glqsja.png';
const Docker = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1690302995/Portfolio/pngwing.com_1_ns85vj.png';
const MongoDB = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1690303700/Portfolio/f2n6grl8e83iv7b9i74hd0d0g0_khbgcw.png';

export default function Skills () {
    const language = useSelector(state => state.language)

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className={s.container}>
                <div className={s.text}>
                    <h1>{language === "english" ? "Skills" : "Habilidades"}</h1>
                </div>
                <div className={s.content}>
                    <div className={s.area} data-aos="fade-up" data-aos-duration="2500">
                        <h3>Front-End</h3>
                        <section>
                            <div>
                                <span>HTML</span>
                                <img src={html} alt="html" className={s.icon}/>
                            </div>
                            <div>
                                <span>CSS</span>
                                <img src={css} alt="css" className={s.icon}/>
                            </div>
                            <div>
                                <span>React</span>
                                <img src={react} alt="react" className={s.icon}/>
                            </div>
                            <div>
                                <span>Redux</span>
                                <img src={redux} alt="redux" className={s.icon}/>
                            </div>
                        </section>
                    </div>
                    <div className={s.area} data-aos="fade-up" data-aos-duration="2500">
                        <h3>Back-End</h3>
                        <section>
                            <div>
                                <span>NodeJS</span>
                                <img src={node} alt="node" className={s.icon}/>
                            </div>
                            <div>
                                <span>Express</span>
                            </div>
                            <div>
                                <span>Docker</span>
                                <img src={Docker} alt="Docker" className={s.icon}/>
                            </div>
                            <div>
                                <span>PostgreSQL</span>
                                <img src={postgreSQL} alt="postgreSQL" className={s.icon}/>
                            </div>
                            <div>
                                <span>MongoDB</span>
                                <img src={MongoDB} alt="MongoDB" className={s.icon}/>
                            </div>
                            
                        </section>
                    </div>
                    <div className={s.area}  data-aos="fade-up" data-aos-duration="2500">
                        <h3>Extras</h3>
                        <section>
                            <div>
                                <span>Git</span>
                                <img src={git} alt="git" className={s.icon}/>
                            </div>
                            <div>
                                <span>Github</span>
                                <img src={github} alt="github" className={s.icon}/>
                            </div>
                            <div>
                                <span>Javascript</span>
                                <img src={javascript} alt="javascript" className={s.icon}/>
                            </div>
                            <div>
                                <span>Integración con API chatGPT</span>
                                <img src={chatGPT} alt="chatGPT" className={s.icon}/>
                            </div>
                        </section>
                    </div>                    
                </div>
        </div>
    )
}