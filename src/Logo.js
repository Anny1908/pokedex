import React from "react";

const Logo = (props) => {
    console.log(props);
    const logWhenClicked =() =>{
        console.log("My Pokemón")
        
}
    return (
        <header>
            <h1> "Bienvenido a la <span>{props.appName}"</span></h1>  
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Imagen de Pokemón" onClick={logWhenClicked}/>
        </header> 
    )   
}

export default Logo;