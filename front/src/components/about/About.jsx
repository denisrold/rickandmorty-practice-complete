import styles from"./About.module.css"
import { Link } from "react-router-dom";
import ghl from"./ghl.png"
import linkedinlogo from"./LILOG1.png"
const About = () => {
    const handleClickGH = ()=>{
        window.open('https://github.com/denisrold', '_blank')
        }
    const handleClickLI = ()=>{
            window.open('https://www.linkedin.com/in/denisrold/', '_blank')
            }
    return(
    <div>
        <h1>Esta es la app de Rick and Morty collections.</h1>
        <h2>by Denis H. Roldán - fullStackDeveloper: inProgress.</h2>
        <hr/>
        <h3>Datos de interes - contacto:</h3>
        <div className={styles.divs}>
       
        <p>Github:</p>
        <img src={ghl} alt="imagen" onClick={handleClickGH} className={styles.logos}/>

        <p>LinkedIn:</p>
        <img src={linkedinlogo} alt="imagen" onClick={handleClickLI} className={styles.logos}/>
     
        </div>
        <hr/>

        <h3>Practica de React-Redux | modulo 2 | soyHenry</h3>
        <div className={styles.buttonHome}>
        <Link to="/home" className={styles.link}><span className={styles.letras}>Go Home</span></Link>
        </div>
    </div>)
}



export default About;