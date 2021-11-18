import "./styles.css";
import React, { useState } from "react";
import Header from "./Components/Header.jsx";
import SearchBar from "./Components/Search-Bar";
import Results from "./Components/Results";

export default function App() {
  const [modoNight, setModoNight] = useState(true);
  const [animation, setAnimation] = useState([]);
  const [button, setButton] = useState("");

  return (
    <div className={`App ${modoNight ? " " : "modo-night"}`}>
      <div className="container">
        <Header modoNight={modoNight} setModoNight={setModoNight} />
        <SearchBar
          setAnimation={setAnimation}
          button={button}
          setButton={setButton}
        />
        <Results animation={animation} />
      </div>
    </div>
  );
}
