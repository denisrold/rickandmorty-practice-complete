import Card from '../card/Card';
import styles from"./Cards.module.css"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFavorites } from '../redux/actions';


export default function Cards({ characters, onClose }) {

const dispatch = useDispatch();
useEffect(()=>{
dispatch(getFavorites());
},[])


   return  <div className={styles.divs}> {
      characters.map(({id, name,status,origin, species, gender, image}) => {
        return <Card
         key={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin}
         image={image}
         onClose={() => onClose(id)}
         id={id}
        />
      })
   }
   </div>;
}
