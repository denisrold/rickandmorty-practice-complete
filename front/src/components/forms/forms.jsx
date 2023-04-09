import Style from"./Forms.module.css"
import { useState } from "react"
import validation from "./validation"
import opening from"./opening.mp4"
import rickmorty_title from"./rickmorty_title.png"

const Forms = (props) =>{

    const [userData,setUserData]= useState({
        username:"",
        password:""
    })
    const [errors, setErrors] = useState({
        username:"",
        password:""
    })
    const handleInputChange=(event)=>{
     const {name, value} = event.target;
    setUserData({
     ...userData,
     [name]: value,
     //tambien se puede hacer event.target.name: event.target.value
    })
    setErrors(
        validation({
         ...userData,
        [name]: value
        })
    )
    }

    const handleSubmit =()=>{
      props.login(userData)  
    }
return(<div>
    <img src={rickmorty_title} alt="title" className={Style.titulo}></img>
    <div className={Style.openingdiv}>
    <video src={opening} type="video/mp4" autoPlay="true" muted="true" className={Style.opening}></video>
    </div>
    <div className={Style.forms}>
        <form onSubmit={handleSubmit}>
            <label className={Style.labels}>Username:  </label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} className={Style.input} placeholder="admin@admin.com"></input>
            <p className={Style.errors}>{errors.username? errors.username : null}</p>
            
            <label className={Style.labels}>Password:  </label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} className={Style.input} placeholder="33pass"></input>
            <p className={Style.errors}>{errors.password? errors.password : null}</p>

            <button type="submit" className={Style.buttons} onMouseOver={()=>{}}>Login</button>
        </form>
    </div>
    </div>)
}

export default Forms