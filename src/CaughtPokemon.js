import React, { useState } from "react";

const CaughtPokemon = (props) => {
    console.log(props);
    const [caught, setCaught] = useState([]);

    const  catchPokemon = ()=> {
        
        setCaught(caught.concat("Pikachu"));     
      }
    
    return (
        <div>
        <p>"Caught {caught.length} Pokemon on <span>{props.date}</span>" </p>
        <ul>
            {caught.map((elemento, index) => {
                return (
                    <li key={index}>{elemento}</li>
                )
                
            })}
        </ul>
        <button onClick={catchPokemon}>clickMe</button>
        </div>
    )
}
export default CaughtPokemon;