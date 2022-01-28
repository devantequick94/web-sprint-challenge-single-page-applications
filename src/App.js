import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import PizzaForm from "./PizzaForm";


const App = () => {
  return (
    <>
     <header className="App-header">
      <h1>Lambda Eats</h1>
       <p>You can remove this code and create your own header</p>
       <nav>
         <Link to="/pizzaForm/order-pizza">Home</Link>
         <Link to="/pizzaForm/pizza">Pizza Form</Link>
         <Link to="/pizzaForm/3"></Link>
         <Link to="/pizzaform/4"></Link>
       </nav>
     </header>

     <main>
       <Switch>
         <Route exact path="/">
           <h4>
            Click on above link for link for home
           </h4>
         </Route>
         <Route exact path ="/pizzaForm/:pizza">
            <PizzaForm />
         </Route>

       </Switch>
     </main>

     <footer>
       Copyright 1994
     </footer>

   








    </>
  );
};
export default App;
