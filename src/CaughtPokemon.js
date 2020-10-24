import React from "react";

const CaughtPokemon = (prosp) => {
    console.log(prosp);
    return (
        <p>"Caught 0 Pokemon on <span>{prosp.date}</span>" </p>
    )
}
export default CaughtPokemon;