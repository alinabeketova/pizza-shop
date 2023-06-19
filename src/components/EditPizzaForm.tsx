import React, {FC, useState, ChangeEvent, FormEvent} from 'react';
import './styles.css';
import Pizza from '../models/Pizza'

interface EditPizzaFromProps {
   data: Pizza;
   updatePizza: (newPizza: Pizza) => void;
   handleToggleEdit: () => void;
}


const EditPizzaFrom: FC<EditPizzaFromProps> = ({data, updatePizza, handleToggleEdit}) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data)

    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditPizza({
            ...editPizza,
            [name]: value
        });        
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const { title, price, img } = editPizza;

        if (title && price && img) {
            updatePizza(editPizza);
            handleToggleEdit();
        }
    }
    
    console.log('edit pizza >>>', editPizza)

    return(
        <form 
        className='edit-form'
        onSubmit={handleSubmit}>
            <input 
                name="title" 
                type="text" 
                placeholder="Название" 
                onChange={handelChange}
                value={editPizza.title}
            />

            <input 
                name="price" 
                type="text" 
                placeholder="Стоимость" 
                onChange={handelChange}
                value={editPizza.price}
            />

            <input 
                name="img" 
                type="text" 
                placeholder="Изображение" 
                onChange={handelChange}
                value={editPizza.img}
            />
            <button type="submit">подтвердить</button>
        </form>
    )
}

export default EditPizzaFrom;