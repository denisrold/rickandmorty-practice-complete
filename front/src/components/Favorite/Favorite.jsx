import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getFavorites } from "../redux/actions";
//import {deleteFavs} from"../redux/actions"
import styles from"./Favorite.module.css"
import info from './info.png';
import star2 from"./star2.png"
import alien from"./backgrounds/alien.jpg"
import robot from"./backgrounds/robot.jpg"
import animals from"./backgrounds/animals.jpg"
import standar from"./backgrounds/standar.jpg"
import human from"./backgrounds/human.jpg"
import mitos from"./backgrounds/mitos.jpg"
import diseases from"./backgrounds/diseases.jpg"
function Favorite({id, name, species, gender, image}) {
   
   const dispatch = useDispatch();
   
   const deleteFavs = async (id)=>{
      await axios.delete(`http://localhost:3001/rickandmorty/deletefav/${id}`);
      dispatch(getFavorites());
      alert("Eliminado con exito.")
      }
   const handleFavorite = () =>{
         deleteFavs(id)
      }

      
   const switchImage =(species)=>{ 
      switch (species) {
         case 'Human': return human;
         case 'Alien': return standar;
         case 'Robot': return robot;
         case 'Animal': return animals;
         case 'Mythological Creature':return mitos;
         case 'Disease': return diseases;
         default: return alien;
      }
   }

   const fontSize1 = (name)=>{
      if (name.length>16 && name.length< 22 ) {return "14.5px"}
      else if (name.length>=22) {return "11.22px"}
      else {return "100%"}
   }
    return (
      <div className={styles.container} style={{ 
         backgroundImage: `url(${switchImage(species)})` 
       }}>
      <h2 className={styles.name} style={{fontSize:fontSize1(name)}}>{name}</h2>
      <img className={styles.imagen} src={image} alt={name}></img>
      <div className={styles.linkes}>
      <img src={star2} onClick={handleFavorite} className={styles.favs} alt="star"/>
      <Link to={`/detail/${id}`} className={styles.links}>
      <img src={info} className={styles.info} alt="info"/>
      </Link >
      </div>
 
      <div className={styles.data}>
      <h2 className={styles.text}>{species}</h2>
      <h2 className={styles.text}>{gender}</h2>
      </div>

</div>
     );
  }

  export const mapStateToProps = (state)=>{
   return {myFavorites: state.myFavorites,
   
}  
}
// export const mapDispatchToProps =(dispatch)=>{
//    return{
// deleteFavs:(id)=>{dispatch(deleteFavs(id))}
// }}
  export default connect(mapStateToProps,null) (Favorite);