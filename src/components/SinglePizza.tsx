import React, {FC, useState} from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import EditPizzaFrom from "./EditPizzaForm";
import Pizza from "../models/Pizza";

interface SinglePizzasProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzasProps> = ({ pizza, updatePizza, deletePizza }) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handelDelete = () => {
        deletePizza(pizza.id);
    }

    return (
        <div className="pizza">

           <img src={`/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} p</span>

            <div className="pizza-controls">
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={handelDelete}/>
            </div>

            {edit
                ? <EditPizzaFrom
                    data={pizza} 
                    updatePizza={updatePizza}

                    handleToggleEdit={handleToggleEdit}
                />
                : null
            }

        </div>
    )
}
export default SinglePizza;