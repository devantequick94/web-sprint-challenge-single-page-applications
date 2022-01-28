import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import OrderForm from "./OrderForm";


const App = () => {
  return (
    <>
     <header className="App-header">
      <h1>Lambda Eats</h1>
       <p>You can remove this code and create your own header</p>
       <nav>
         <Link to="/">Home</Link>
         <Link to="/orderForm/pizza-form">Pizza Form</Link>
         <Link to="/orderForm/3"></Link>
         <Link to="/orderForm/4"></Link>
       </nav>
     </header>

     <main>
       <Switch>
         <Route exact path="/">
           <h4>
            Click on above link for link for home
           </h4>
         </Route>
         <Route exact path ="/orderForm/:pizza-form">
            <OrderForm />
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
