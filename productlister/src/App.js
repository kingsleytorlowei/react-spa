import React from 'react';
import './App.css';
import Product from './Product';


const App = () => {
  return (
    <div>
      {prods.map(prod=>(
        <Product name={prod.name} price={prod.price}/>
      ))}
    </div>
  )
};

const prods =[
  {name: 'Master Widget', price:'$125.00'},
  {name: 'Master Wudget', price:'$135.00'},
  {name: 'Sub Widget', price:'$75.00'},
  {name: 'Sub Wudget', price:'$85.00'}
]

export default App;
