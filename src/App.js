import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import OrderForm from "./PizzaForm";


const App = () => {
  return (
    <>
     <header className="App-header">
      <h1>Lambda Eats</h1>
       <p>You can remove this code and create your own header</p>
       <nav>
         <Link to="/">Home</Link>
         <Link to="/pizza-form/pizza-form">Pizza Form</Link>
         <Link to="/pizza-form/3"></Link>
         <Link to="/pizza-form/4"></Link>
       </nav>
     </header>

     <main>
       <Switch>
         <Route exact path="/">
           <h4>
            Click on above link for link for home
           </h4>
         </Route>
         <Route exact path ="/pizza-form/:pizza-form">
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
