import SearchBar from "../searchbar/SearchBar.jsx";
import styles from"./Nav.module.css"
import { Link } from"react-router-dom"
import logout1 from"./logout.png"

 export default function Nav( {onSearch} ){
    return(
        <nav className={styles.navs}>
                <Link to="/" ><img src={logout1} className={styles.logout} alt=""/></Link>
                <Link to="about" className={styles.about}>About</Link>
            <div >
                <Link to="home"  className={styles.buttonNav1}>Home</Link>
                <Link to="favorites"  className={styles.buttonNav2}>Mis Favoritos</Link>
            </div>
                <SearchBar onSearch={onSearch}/>
        </nav>
    )
 }
