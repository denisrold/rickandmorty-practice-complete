import {useDispatch} from "react-redux";
import { connect } from 'react-redux';
import { orderCards, filterCards, allFavs} from "../redux/actions"; 
import styles from"./Favorites.module.css";
import Favorite from '../Favorite/Favorite';
import { useEffect } from 'react';
import { getFavorites } from '../redux/actions';
import axios from"axios";


const Favorites =(props) => {
const dispatch = useDispatch();


useEffect(()=>{
dispatch(getFavorites());
},[])


const orderCard = (event)=>{
  props.orderCards(event.target.value)
}
const filterCard = async (event)=>{
    //const evento = event.target.value;
    props.filterCards(event.target.value);
}
const allFav = (event)=>{
  dispatch(getFavorites());
} 
  return (
    <div>

    <div className={styles.spans}>
    <span className={styles.spancito}>Ordenar por ID: </span>
    <select onChange={orderCard} className={styles.selector}>
    <option value="Ascendente">Ascendente</option>
    <option value="Descendente">Descendente</option>
    </select>

    <span className={styles.spancito}>||  Ordenar por genero: </span>
    <select onChange={filterCard} className={styles.selector}>
    <option value="none">Por genero</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">unknown</option>
    </select>
    <button onClick={allFav} className={styles.buttons1}>Ver todos</button>
    </div>

    <div>
    <div className={styles.favorites}> {
      props.myFavorites?.map(({id, name,status, species, gender, image}) => {
        return (
        <Favorite
        key={id}
         id={id}
         name={name}
         status={status}
         species={species} 
         gender={gender}
         image={image} 
        />
        )
      })
   }
    </div>  
    </div>

  </div>
)
}









export const mapStateToProps = (state)=>{
    return {myFavorites: state.myFavorites
}  
}

export const mapDispatchToProps = (dispatch) =>{
  return {
    orderCards:(select)=>{dispatch(orderCards(select))},
    filterCards:(evento)=>{dispatch(filterCards(evento))},
    allFavs:(allfav)=>{dispatch(allFavs(allfav))},
 }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);
