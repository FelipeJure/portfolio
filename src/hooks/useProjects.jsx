import { useSelector } from "react-redux";

export const useProjects = () => {
    const language = useSelector((state) => state.language);

    const videoMovies =
        "https://res.cloudinary.com/dholyxgxe/video/upload/v1666450661/Portfolio/moviesAppVideoCorto_syzfsr.mp4";
    const videoLet =
        "https://res.cloudinary.com/pflet/video/upload/v1663803785/Let/Others/lets_GO_bzvzfp.mp4";
    const videoWeather =
        "https://res.cloudinary.com/dholyxgxe/video/upload/v1666450471/Portfolio/weatherAppVideo_px3oha.mp4";
    const videoDogs =
        "https://res.cloudinary.com/dholyxgxe/video/upload/v1666449774/Portfolio/DogsApp_ocavt9.mp4";
    const videoDolar =
        "https://res.cloudinary.com/dholyxgxe/video/upload/v1670430451/Portfolio/d%C3%B3lar_App_reducido_kuiudu.mp4";

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
                    video: videoLet,
                    link: 'https://pf-let.vercel.app'
                }
            ]
        },
        both: {
            title: language === "english" ? "Team Work" : "En equipo",
            info: [
                {
                    name: '',
                    description: 'd',
                    video: 'd'
                }
            ]
        },
        front: {
            title: language === "english" ? "Team Work" : "En equipo",
            info: [
                {
                    description: 'd',
                    video: 'd'
                }
            ]
        }
    }
}