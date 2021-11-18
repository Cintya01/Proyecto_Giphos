import Giphos from "./Giphos";
import React from "react";
import Error from "./Error";

export default function Results(props) {
  return (
    <div className="text-style">
      <p>Resultado de la Búsqueda</p>
      <div className="gifCont">
        {props.animation.length > 0 ? (
          props.animation.map((giphos) => {
            return (
              <Giphos
                key={giphos.id}
                url={giphos.url}
                img={giphos.images.downsized_medium.url}
              />
            );
          })
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}
