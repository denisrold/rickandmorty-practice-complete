import styles from"./SearchBar.module.css"
import { useState} from "react";



export default function SearchBar({onSearch}) {
   const [characters, setCharacters] = useState("")

   const handleChange = (event) => {
      setCharacters(event.target.value);
   }
   const setInput = ()=>{
   let input=document.querySelector("#inputs")
 input.value = ""
   } 
   return (
      <div >
         <div className={styles.searchs}>
          <input type='search' id="inputs" value={characters} onChange={handleChange} className={styles.inputs} onClick={setInput}></input>
          <button onClick={()=>{onSearch(characters)}} className={styles.buttonNav}>Buscar por ID</button> 
      </div>
      </div>
   );
}
