import React from "react";
import { useSelector } from "react-redux";
import s from './LeftPage.module.css';
import style from './LeftPageIcons.module.css';


export default function LeftPage () {
    const language = useSelector(state => state.language)
    const profilePic = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/picProfile_animated_cmlbdw.webp';
    const linkedin = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449845/Portfolio/linkedin_iufuag.png';
    const github = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449510/Portfolio/github_z8me7k.png'
    const cv = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449509/Portfolio/cv_tseqli.png';


    const onMove = (e) => {
        const x = e.nativeEvent.offsetX - 60
        const y = e.nativeEvent.offsetY - 60
        const bg = e.target.children[1]
        const icon = e.target.children[0]
        if (bg)bg.style.transform = `translate(${x/8}px, ${y/8}px)`
        else icon.style.transform = 'translate(0px, 0px)'
        icon && (icon.style.transform = `translate(${x/4 + 4}px, ${y/4 + 4}px)`)
    }

    const onEnter = (e) => {
        const bg = e.target.children[1]
        const icon = e.target.children[0]
        bg && (bg.style.transition = 'all 0.15s ease')
        icon && (icon.style.transition = 'all 0.15s ease')
        setTimeout(() => {
            bg && (bg.style.transition = '')
            icon && (icon.style.transition = '')
        }, 150)
    }

    const onLeave = e => {
        const bg = e.target.children[1]
        const icon = e.target.children[0]
        if(bg){
            bg.style.transition = 'all 0.25s ease'
            bg.style.transform = 'translate(0px, 0px)'
        }
        if(icon){
            icon.style.transition = 'all 0.25s ease'
            icon.style.transform = 'translate(0px, 0px)'
        }
        setTimeout(() => {
            bg && (bg.style.transition = '')
            icon && (icon.style.transition = '')
        }, 250)
    }

    return (
        <div className={s.container}>
            <div className={s.information}>
                <div className={s.text}>
                    <h1>Felipe Jure</h1>
                    <h4 className={s.fsd}>Full Stack Developer</h4>
                </div>
                <img src={profilePic} alt="picProfile" className={s.image}/>
            </div>
            <div className={style.containerIcons}>
                <a href="https://www.linkedin.com/in/felipe-jure" target='_blank' rel='noreferrer' className={style.button} onMouseMove={onMove} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img src={linkedin} alt="linkedin" className={style.icon}/>
                    <div className={style.bg}></div>
                </a>
                <a href="https://github.com/FelipeJure" target='_blank' rel='noreferrer' className={style.button} onMouseMove={onMove} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img src={github} alt="github" className={style.icon}/>
                    <div className={style.bg}></div>
                </a>
                <a href={language === 'spanish'? "https://drive.google.com/file/d/1GhKrAuQvuJnVBvNX89vxpva2m4luLdhp/view?usp=sharing": 'https://drive.google.com/file/d/1a85wxbl1ouYV_2I1Dfoi2aD74cjLdccj/view?usp=sharing'} target='_blank' rel='noreferrer' className={style.button} onMouseMove={onMove} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img src={cv} alt="cv" className={style.icon}/>
                    <div className={style.bg}></div>
                </a>
            </div>
        </div>
    )
}