import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaFrom';
import Pizza from './models/Pizza';
import DisplayPizzas from './components/DisplayPzzas';
import './App.css';

const App: FC = () => {
  const [pizzasList, setPizzaList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzasList, newPizza]);
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(pizzasList.map((pizza) =>
      (pizza.id === newPizza.id ? newPizza : pizza)));
  }

  const deletePizaa = (id: number) => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzaList(newPizzasList)
  }

  console.log(pizzasList)

  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>
          Наша пиццерия
        </span>
        <AddPizzaForm 
          addPizza={addPizza}
        />

        <DisplayPizzas 
          pizzasList={pizzasList}
          updatePizza={updatePizza}
          deletePizaa={deletePizaa}
        />
      </div>
    </div>
  );
}

export default App;
