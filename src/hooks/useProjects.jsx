import { useSelector } from "react-redux";

export const useProjects = () => {
    const language = useSelector((state) => state.language);
    
    return {
        teamWork: {
            title: language === "english" ? "Team Work" : "En equipo",
            info:[
                {
                    name: `let's GO`,
                    description: language === "english" ? `It's an e-commerce of bike and adventures rental with a forum
                    to share your experience and rate your bike. It was made in
                    team with other 7 persons using SCRUM and Trello to
                    organizate. It use Javascript, React, Redux, CSS, NodeJs,
                    Sequelize, Express and PostgreSQL.`
                    :
                    `Es un e-commerce de alquiler de bicicletas y aventuras con un
                    foro para compartir experiencias y puntuar tu bici. Hecha por
                    un grupo con otras 7 personas, usando metodología SCRUM y
                    Trello para su organización. Se utilizó Javascript, React,
                    Redux, CSS, NodeJs, Sequelize, Express y PostgreSQL.`,
                    libraries: 'Socket.IO | Cloudinary | Autoh0 | Sweet Alert | CoreUI | EmailJS | MaterialUI',
                    video: 'https://res.cloudinary.com/pflet/video/upload/v1663803785/Let/Others/lets_GO_bzvzfp.mp4',
                    link: 'https://pf-let.vercel.app'
                }
            ]
        },
        both: {
            title: language === "english"
            ? "Front-End & Back-End with DB"
            : "Front-End y Back-End con base de datos",
            info: [
                {
                    name: 'Dogs App',
                    description: language === "english" ? 
                    `It's a Single Page Application, made mainly with Javascript,
                    React, Redux, NodeJs, Express and PostgreSQL as database. It
                    consumes data from an external API and has a database where
                    new dogs can be created, modified or deleted. The App displays
                    the characteristics of the dogs and can be sorted (by name,
                    weight and height) and filtered (by temperament, breed or
                    origin). It also has a search bar by name. The backend was
                    deployed in Railway. The frontend was deployed in Vercel`
                    :
                    `Es una Single Page Application, hecha con Javascript, React,
                    Redux, NodeJS, Express y PostgreSQL como base de datos.
                    Consume información de una API externa y cuenta con una base
                    de datos donde se pueden crear nuevos perros, modificarlos o
                    eliminarlos. La App muestra las características de los perros,
                    pudiendo ordenarlos (por nombre, peso y altura) y filtrarlos
                    (por temperamento, raza y origen). Tambien tiene una barra de
                    búsqueda por nombre. El backend fue deployado en Railway. El
                    frontend fue deployado en Vercel`,
                    link: 'https://pi-dogs-previus.vercel.app',
                    video: 'https://res.cloudinary.com/dholyxgxe/video/upload/v1666449774/Portfolio/DogsApp_ocavt9.mp4',
                    orientation: 'horizontal'
                },
                {
                    name: 'Dolar App',
                    description: language === "english" ? 
                    `It's a Single Page Application, made mainly with Typescript,
                    React Native, Redux, NodeJs, Express and PostgreSQL as
                    database. It consumes data from an external API and has a
                    database where the information is reorganized and stored. The
                    App displays the exchange of the types of dollar and other
                    money. Also show the difference between options of investment
                    and the evolution of two types of dollars.`
                    :
                    `Es una Single Page Application, hecha con Typescript, React
                    Native, Redux, NodeJS, Express y PostgreSQL como base de
                    datos. Consume información de una API externa y cuenta con una
                    base de datos donde se reorganiza y almacena la información.
                    La App muestra el cambio de los tipos de dólar y otro dinero.
                    También muestra la diferencia entre opciones de inversión y la
                    evolución de dos tipos de dólares.`,
                    link: 'https://youtube.com/shorts/wKdujBNPCyI',
                    video: 'https://res.cloudinary.com/dholyxgxe/video/upload/v1670430451/Portfolio/d%C3%B3lar_App_reducido_kuiudu.mp4',
                    orientation: 'vertical'
                }
            ]
        },
        front: {
            title: "Front-End",
            info: [
                {
                    name: 'Movies App',
                    description: language === "english" ?
                    `It's an application made with Javascript, React and Redux with
                    the helpfull of libraries just like Bootstrap and Swiper.`
                    :
                    `Es una aplicación hecha con Javascript, React, Redux y la
                    ayuda de librerías como Bootstrap y Swiper.`,
                    link: 'https://moviesapp-dusky.vercel.app',
                    video: 'https://res.cloudinary.com/dholyxgxe/video/upload/v1666450661/Portfolio/moviesAppVideoCorto_syzfsr.mp4'
                },
                {
                    name: 'Weather App',
                    description: language === "english" ?
                    `It's my first application and I made it with Javascript, React
                    and Redux with pure CSS.`
                    :
                    `Es mi primer aplicación y la realizé con Javascript, React y
                    Redux con CSS puro`,
                    link: 'https://weatherapp-jet-eight.vercel.app',
                    video: 'https://res.cloudinary.com/dholyxgxe/video/upload/v1666450471/Portfolio/weatherAppVideo_px3oha.mp4'
                }
            ]
        }
    }
}