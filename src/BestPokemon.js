import React from "react";

const BestPokemon = (props) => {
    
    return ( 
        <div>
            <p>"My favourite Pokemon is Piafabec"</p>
            <ul>
                {props.abilities.map((ability, index) => {
                return (
                    <li key={index}>{ability}</li>
                )}
                )} 
                </ul>
        </div>
    )
}
export default BestPokemon;