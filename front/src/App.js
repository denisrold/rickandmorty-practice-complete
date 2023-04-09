import "./App.css";
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards.jsx";
import About from "./components/about/About";
import Details from "./components/detail/Details";
import Forms from "./components/forms/forms";
import Favorites from "./components/Favorites/Favorites.jsx";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert";

function App() {
  const [characters, setCharacters] = useState([]);
  const [crashcharacters, setcrashCharacters] = useState([]);

  const onSearch = (id) => {
    fetch(`http://localhost:3001/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (crashcharacters.includes(data.id)) {
          Swal({
            text: "Ese personaje ya esta en pantalla",
            icon: "warning",
            timer: 2000,
            buttons: false,
            position: "top",
          });
        } else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setcrashCharacters(() => [...crashcharacters, data.id]);
        } else {
          Swal({
            text: "No se encotro personaje con esa ID",
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
    setcrashCharacters(crashcharacters.filter((e) => e !== id));
  };

  const location = useLocation();
  //esto lo haria en una base de datos, en este caso lo estoy haciendo en forma local.
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "admin@admin.com";
  const password = "33pass";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>{location.pathname !== "/" && <Nav onSearch={onSearch} />}</div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Routes>
          <Route path="/" element={<Forms login={login} />} />
          <Route
            path="home"
            element={<Cards onClose={onClose} characters={characters} />}
          />
          <Route path="About" element={<About />} />
          <Route path="detail/:detailId" element={<Details />} />
          <Route path="Favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
