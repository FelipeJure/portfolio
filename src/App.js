import { useSelector } from 'react-redux';
import s from './App.module.css';
import About from './Components/About/About';
import LeftPage from './Components/LeftPage/LeftPage';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


function App() {
  const color = useSelector(state => state.color)
  
  return (
    <div className={color === 'light'? s.light : s.dark}>
      <LeftPage/>
      <Navbar/>
      <About/>
      <div className={s.container}>
        <div className={s.ball} id='skills'></div>
        <div className={s.line}></div>
      </div>
      <Skills/>
      <div className={s.containertwo}>
        <div className={s.ball} id='proyects'></div>
        <div className={s.line}></div>
      </div>
      <Projects/>
      <div className={s.container}>
        <div className={s.ball} id='contact'></div>
        <div className={s.line}></div>
      </div>
      <Contact/>
    </div>
  );
}

export default App;
