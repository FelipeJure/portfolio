import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage, changeColor } from '../../Redux/actions';
import NavbarResponsive from './NavbarResponsive';
import s from './Navbar.module.css';

export default function Navbar () {
    const dispatch = useDispatch()
    const [active, setActive] = useState('')
    const color = useSelector(state => state.color)
    const language = useSelector(state => state.language)
    const spanish = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449510/Portfolio/espaniol_ikudq8.png';
    const english = 'https://res.cloudinary.com/dholyxgxe/image/upload/v1666449779/Portfolio/ingles_bl178y.png';


    const onChange = (e) => {
        setActive(e.target.name)
    }

    const onChangeLanguage = (e) => {
        dispatch(changeLanguage(e.target.id))
    }

    const onChangeColor = () => {
        if(color === 'light'){
            dispatch(changeColor('dark'))
        }
        else {
            dispatch(changeColor('light'))
        }
    }

    return (
        <nav className={s.nav}>
            <div className={s.responsive}>
                <NavbarResponsive/>
            </div>
            <div className={s.items}>
                <a className={active === 'about'?`${s.title} ${s.active}`: `${s.title}`} href='#about' name='about' onClick={onChange}>
                    <span className={`${s.border} ${s.borderTop}`}></span>
                    <span className={`${s.border} ${s.borderRight}`}></span>
                    <span className={`${s.border} ${s.borderBottom}`}></span>
                    <span className={`${s.border} ${s.borderLeft}`}></span>
                    {language === 'english'? 'About' : 'Sobre mi'}
                </a>
                <a className={active === 'skills'?`${s.title} ${s.active}`: `${s.title}`} href='#skills' name='skills' onClick={onChange}>
                    <span className={`${s.border} ${s.borderTop}`}></span>
                    <span className={`${s.border} ${s.borderRight}`}></span>
                    <span className={`${s.border} ${s.borderBottom}`}></span>
                    <span className={`${s.border} ${s.borderLeft}`}></span>
                    {language === 'english'? 'Skills' : 'Habilidades'}
                </a>
                <a className={active === 'proyects'?`${s.title} ${s.active}`: `${s.title}`} href='#proyects' name='proyects' onClick={onChange}>
                    <span className={`${s.border} ${s.borderTop}`}></span>
                    <span className={`${s.border} ${s.borderRight}`}></span>
                    <span className={`${s.border} ${s.borderBottom}`}></span>
                    <span className={`${s.border} ${s.borderLeft}`}></span>
                    {language === 'english'? 'Projects' : 'Proyectos'}
                </a>
                <a className={active === 'contact'?`${s.title} ${s.active}`: `${s.title}`} href='#contact' name='contact' onClick={onChange}>
                    <span className={`${s.border} ${s.borderTop}`}></span>
                    <span className={`${s.border} ${s.borderRight}`}></span>
                    <span className={`${s.border} ${s.borderBottom}`}></span>
                    <span className={`${s.border} ${s.borderLeft}`}></span>
                    {language === 'english'? 'Contact' : 'Contacto'}
                </a>
            </div>
            <input className={s.switch} type="checkbox" onClick={onChangeColor}></input>
            <div className={s.flags}>
                <button className={s.flagButton}>
                    <div className={language === 'english'? null : s.lang} id='english' onClick={onChangeLanguage}></div>
                    <img src={english} alt="english" className={s.flag}/>
                </button>
                <button className={s.flagButton}>
                    <div className={language === 'spanish'? null : s.lang} id='spanish' onClick={onChangeLanguage}></div>
                    <img src={spanish} alt="spanish" className={s.flag}/>
                </button>
                
            </div>
        </nav>
    )
}