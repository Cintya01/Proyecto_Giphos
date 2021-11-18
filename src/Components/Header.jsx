import React from "react";

console.clear();

function Header(props) {
  return (
    <div className={`${props.modoNight ? "" : "modo-night"}`}>
      <div className="header ">
        <img
          className="logo-gifos"
          src={`${
            props.modoNight
              ? "/Resource/logo-desktop.svg"
              : "/Resource/logo-desktop-modo-noct.svg"
          }`}
          alt="GIFOS"
        />
        <button
          className={`${props.modoNight ? "btn-modo-day" : "btn-modo-night"}`}
          onClick={() => props.setModoNight(!props.modoNight)}
        >
          {`${props.modoNight ? "MODO DARK" : "MODO LIGHT"}`}
        </button>
      </div>
    </div>
  );
}

export default Header;
