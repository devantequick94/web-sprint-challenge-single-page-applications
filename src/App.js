import React, { useState }from "react";
import { Route, Switch, Link } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import MyOrder from "./MyOrder";



const App = () => {


const [myOrder, setMyorder] = useState({})

const orderSubmit = (order) => {
  setMyorder(order)
  console.log(order)
}

  return (
    <>
     <header className="App-header">
      <h1>Lambda Eats</h1>
       <p>You can remove this code and create your own header</p>
       <nav>
         <Link to="/">Home</Link>
         <Link to="/pizzaForm/pizza">Pizza Form</Link>
       </nav>
     </header>

     <main>
       <Switch>
         <Route exact path="/">
           <h4>
            Click on above link for home
           </h4>
         </Route>
         <Route exact path ="/pizzaForm/:pizza">
            <PizzaForm orderSubmit={orderSubmit} />
         </Route>
         <Route exact path="/myOrder">
            <MyOrder myOrder={myOrder} />
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
