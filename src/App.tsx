import React, {FC, useState} from 'react';
import Pizza from './models/Pizza'
import DisplayPizza from './components/DisplayPizza';
import './App.css';
import AddPizzaFrom from './components/AddPizzaFrom';


const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) => 
      (pizza.id === newPizza.id ? newPizza : pizza)));
  }

  const deletePizza = (id: number) => {

    const newPizzaList = pizzasList.filter(pizza => pizza.id !== id);
    setPizzasList(newPizzaList);
  }

  console.log('pizzaList', pizzasList )

  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>Наша пиццерия</span>
        <AddPizzaFrom 
          addPizza={addPizza}
        />
        <DisplayPizza 
          pizzasList={pizzasList}
          deletePizza={deletePizza}
          updatePizza={updatePizza}
        />
      </div>
    </div>
  );
}

export default App;
