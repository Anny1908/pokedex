import React from "react";

const Logo = (props) => {
    console.log(props);
    
    return (
        <header>
            <h1> "Bienvenido a la <span>{props.appName}"</span></h1>  
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png" alt="Imagen de Pokemón" onClick={props.handleClick}/>
        </header> 
    )   
}

export default Logo;