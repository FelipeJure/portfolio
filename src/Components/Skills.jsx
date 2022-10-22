import React from "react";
import s from './Skills.module.css';

const html = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449844/Portfolio/html_uijzer.png';
const css = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449509/Portfolio/css_twuqaa.png';
const react = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/react_dh91w4.png';
const redux = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666450392/Portfolio/redux_lclafd.png';
const javascript = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/javascript_ohz2xw.png';
const github = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449510/Portfolio/github_z8me7k.png';
const git = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449510/Portfolio/git_kt6gso.png';
const sequelize = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666450392/Portfolio/sequelize_v04prd.png';
const node = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/node_uwcswm.png';
const postgreSQL = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/postgreSQL_glqsja.png';

export default function Skills () {
    return (
        <div className={s.container}>
                <div className={s.text}>
                    <h1>Skills</h1>
                </div>
                <div className={s.content}>
                    <div className={s.area} data-aos="fade-right">
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
                    <div className={s.area}>
                        <h3>Back-End</h3>
                        <section>
                            <div>
                                <span>Express</span>
                            </div>
                            <div>
                                <span>Sequelize</span>
                                <img src={sequelize} alt="sequelize" className={s.icon}/>
                            </div>
                            <div>
                                <span>NodeJS</span>
                                <img src={node} alt="node" className={s.icon}/>
                            </div>
                            <div>
                                <span>PostgreSQL</span>
                                <img src={postgreSQL} alt="postgreSQL" className={s.icon}/>
                            </div>
                        </section>
                    </div>
                    <div className={s.area}>
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
                        </section>
                    </div>                    
                </div>
        </div>
    )
}