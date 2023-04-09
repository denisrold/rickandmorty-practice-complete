import React from"react"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from"./Card.module.css"
import { connect } from 'react-redux';
//import { deleteFavs } from"../redux/actions" ya no lo uso. "comunicado con el backend" 
import info from './info.png';
import star2 from"./star2.png"
import sinstar2 from"./sinstar2.png"
import axios from"axios"
import { getFavorites } from "../redux/actions";
import { useDispatch } from "react-redux";

 function Card(props) {
   
   const [isFav, setisFav] = React.useState(false);
   const dispatch = useDispatch();
   const addFavorites = (character)=>{ // ese personaje que recibe add Favorites es el body. 
   
      axios.post("http://localhost:3001/rickandmorty/fav", character)
      .then(res=>console.log("ok"))
   };

   const deleteFavs = async (id)=>{
      await axios.delete(`http://localhost:3001/rickandmorty/deletefav/${id}`);
      dispatch(getFavorites());
      alert("Eliminado con exito.")
      }
   
   const handleFavorite = () =>{
 
      if(!isFav){setisFav(true);
      addFavorites(props)
      }

      if(isFav){setisFav(false);
         deleteFavs(props.id)
      };
      }

   useEffect(() => {
   props.myFavorites.forEach((fav) => {
   if (fav.id === props.id) {
   setisFav(true);
   }});
}, [props.myFavorites]);


   return (
      <div className={styles.container} style={{ 
         backgroundImage: `url(${props.image})` 
       }}>
          
            <h3 className={styles.number}>{props.id}</h3>
            <button className={styles.cerrar} onClick={props.onClose} >X</button>
          
            <div className={styles.otros}>

            {isFav? (<img src={star2} onClick={handleFavorite} className={styles.favs} alt=""/>): (
            <img src={sinstar2} onClick={handleFavorite} className={styles.favs} alt="" />)}            
            <Link to={`/detail/${props.id}`} className={styles.links}>
            <img src={info} className={styles.info} alt=""/>
            </Link >
            </div>
   
               <h2 className={styles.name} >{props.name}</h2>
      </div>
   );
}

//export function mapDispatchToProps(dispatch){
//return {
   // addFavorites:(id)=>{dispatch(addFavorites(id))}, YA no lo uso porque guardo favoritos directo en el server. ln 16 a 20 
  // deleteFavs:(id)=>{dispatch(deleteFavs(id))}, ya no lo uso. "comunicado con el backend" 
//}
//}

export const mapStateToProps = (state)=>{
return {myFavorites: state.myFavorites,
   allCharacters: state.allCharacters,
}  
}

export default connect(mapStateToProps,null)(Card);
