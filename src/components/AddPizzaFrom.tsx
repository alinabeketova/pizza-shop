import React, {FC, useState, ChangeEvent, FormEvent} from 'react';
import './styles.css';
import Pizza from '../models/Pizza'

interface AddPizzaFromProps {
    addPizza: (newPizza: Pizza) => void;
}

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaFrom: FC<AddPizzaFromProps> = ({addPizza}) => {
    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState)

    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewPizza({
            ...newPizza,
            [name]: value
        });        
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const { title, price, img } = newPizza;

        if (title && price && img) {
            addPizza({
                title,
                img,
                price,
                id: Date.now()
            });
            setNewPizza(initState)
        }
    }
    
    console.log('new pizza >>>', newPizza)

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="title" 
                type="text" 
                placeholder="Название" 
                onChange={handelChange}
                value={newPizza.title}
            />

            <input 
                name="price" 
                type="text" 
                placeholder="Стоимость" 
                onChange={handelChange}
                value={newPizza.price}
            />

            <input 
                name="img" 
                type="text" 
                placeholder="Изображение" 
                onChange={handelChange}
                value={newPizza.img}
            />
            <button type="submit">+ Добавить в меню</button>
        </form>
    )
}

export default AddPizzaFrom;