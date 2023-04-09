import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import{ Link } from"react-router-dom"
import styles from"./Details.module.css"
const Details = ()=>{
    const { detailId } = useParams();
    const [character, setCharacter] = useState({}); 

    useEffect(() => {
        fetch(`http://localhost:3001/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
 return (
    <div>

      <div className={styles.contains}>

        <div className={styles.name}>
          <h1>Nombre: <span className={styles.texts1}>{character?.name}</span></h1>
        </div>
        <div className="style.imageConteiner">
          <img src={character?.image} alt="imagen" className={character?.status === "Dead"? styles.dead:styles.image}/>
        </div>
      
        <div className={styles.status}>
          <p>Especie: <span className={styles.texts}>{character?.species}</span></p>
          <p>ID: <span className={styles.texts}>{character?.id}</span></p>
          <p >Genero: <span className={styles.texts}>{character?.gender }</span></p>
          <p>Estado: <span className={character?.status === "Dead"? styles.deadtext:styles.texts}>{character?.status}</span></p>
        </div>

        <div className={styles.origin}>
          <p>{character?.origin}</p>
        </div>
    </div>
    <div className={styles.buttonHome}>
        <Link to="/home" className={styles.link}><span className={styles.letras}>Go Home</span></Link>
    </div>
    </div>

 )   
} 

export default Details;