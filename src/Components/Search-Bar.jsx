import React, { useEffect, useState } from "react";

export default function SearchBar(props) {
  const [gif, setGif] = useState("");
  const [showAutoComp, setShowAutoComp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const [gifSugg, setGifSugg] = useState([]);
  const [onSuggestion, setOnSuggestion] = useState(true);

  useEffect(() => {
    if (gif.length > 1 && onSuggestion) {
      setShowAutoComp(true);
    } else {
      setShowAutoComp(false);
      setOnSuggestion(true);
    }
    console.clear();
    setLoading(true);

    let apiKey = "fxs5j1RYh9TmEAXYbDueIutwBvvGwaAT";
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${gif}`
    );

    peticion
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSuggestion(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Algo salió mal", error);
      });
  }, [gif]);

  const inputHandler = (e) => {
    setGif(e.target.value);
  };

  function sugHandler(e) {
    setShowAutoComp(false);
    setSuggestion([]);
    setOnSuggestion(false);
    setGifSugg(e.target.innerText);
    setGif(e.target.innerText);
  }

  const buscarGiphos = () => {
    const buscar = document.getElementById("findGifs").value;
    document.getElementById("findGifs").value = "";
    setGifSugg(buscar);
    setShowAutoComp(false);
    setSuggestion([]);
    setLoading(true);
  };

  useEffect(() => {
    let apiKey = "fxs5j1RYh9TmEAXYbDueIutwBvvGwaAT";
    let peticion = null;
    if (gif !== "") {
      peticion = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifSugg}&limit=12&offset=0&rating=g&lang=en`
      );
    } else {
      peticion = fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=15&rating=g`
      );
    }

    peticion
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        props.setAnimation(res.data);
        setLoading(false);
      });
  }, [gifSugg]);

  return (
    <div>
      <div className="search-cont">
        <h1 className="text-style">
          ¡Inspírate y busca los mejores <span>GIFS</span>!
        </h1>
        <img
          className="ilustration"
          src="/Resource/ilustra_header.svg"
          alt="Amigos"
        />
        <div className="search-position">
          <input
            className="search-bar"
            placeholder="Buscar Gifs"
            id="findGifs"
            type="text"
            value={gif}
            onChange={inputHandler}
          />
          <button className="button-search" onClick={buscarGiphos}>
            <img src="/Resource/icon-search-mod-noc.svg" alt="search" />
          </button>

          {showAutoComp === true ? (
            <div className="autocomplete">
              {suggestion.map((suggestion) => {
                return <p onClick={sugHandler}>{suggestion.name}</p>;
              })}
            </div>
          ) : null}
        </div>
        {loading === true ? <p>Buscando...</p> : null}
      </div>
    </div>
  );
}
