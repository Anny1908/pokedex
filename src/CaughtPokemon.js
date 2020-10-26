import React from "react";

const CaughtPokemon = (props) => {
    console.log(props);
    return (
        <p>"Caught 0 Pokemon on <span>{props.date}</span>" </p>
    )
}
export default CaughtPokemon;