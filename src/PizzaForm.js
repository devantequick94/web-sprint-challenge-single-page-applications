import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';


const initialForm = {
    

        name: "",
        Select: "",
        Olives: false,
        Cheese: false,
        Pepperoni: false,
        Sausage: false,
        TOS: false

    }


const PizzaForm = (props) => {
    let history = useHistory()



    const {orderSubmit} = props


    const [ form, setForm ] = useState(initialForm)

    const formChange = (evt) => {
        console.log(evt.target.name, evt.target.value, evt.target.type)
        const value = evt.target.type === "checkbox" ? evt.target.checked :  evt.target.value
        setForm({...form, [evt.target.name]: value})
    }

    const sumbitButton = (evt) => {
        evt.preventDefault()
        orderSubmit(form)
        setForm(initialForm)
        history.push("/myOrder")
    }

    useEffect(()=> {

    }, [form])

    const prices = {
        "pizza": "$9.99"
    }

    console.log(props)

    const { pizza } = useParams()

    return(
        <section className="pizza-form">
          <h2>
              { pizza } order form
          </h2>
          <p>starting as low as { prices.pizza }</p>
          <form onSubmit={sumbitButton}>
              <label>
                  Name:
                  <input onChange={formChange}
                   type="text" 
                   name="name" 
                   id ="pizza-form"
                   value={form.name} />
              </label>
              <label>
                  Dropbox:
                <select onChange={formChange} name="Select">
                  <option value="Olives">Olives</option>
                  <option value="Cheese">Cheese</option>
                  <option value="Pepperoni">Pepperoni</option>
                  <option value="Sausage">Sausage</option>
                </select>
              </label>
              <label>
                  Checkbox:
                  <input onChange={formChange} type="checkbox" name="CB" checked={form.checkbox} />
              </label>
              <label>
                  Terms Of Service:
                  <input onChange={formChange} type="checkbox" name="TOS" />
              </label>
              <button type="submit">ORDER NOW!</button>
          </form>
        </section>
    )
}

export default PizzaForm;