import React, { useState } from "react";

const CaughtPokemon = (props) => {
    console.log(props);
    const [caught, setCaught] = useState(0);

    function catchPokemon() {
        setCaught(caught + 1);
      }
    return (
        <div>
        <p>"Caught {caught} Pokemon on <span>{props.date}</span>" </p>
        <button onClick={catchPokemon}>clickMe</button>
        </div>
    )
}
export default CaughtPokemon;