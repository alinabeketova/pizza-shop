import React, { FC } from "react";
import SinglePizza from "./SinglePizza";
import Pizza from "../models/Pizza";

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizaa: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizaa }) => {
    return (
        <div className="conteiner">
            {pizzasList.map((pizza) => {
                return <SinglePizza
                        key={pizza.id} 
                        deletePizaa={deletePizaa}
                        updatePizza={updatePizza}
                        pizza={pizza}/>
            })}
        </div>
    )
}

export default DisplayPizzas