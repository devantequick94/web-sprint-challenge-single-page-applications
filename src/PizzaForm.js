import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const initialForm = {
    

        name: "",
        size: "",
        Olives: false,
        Cheese: false,
        Pepperoni: false,
        Sausage: false,
        TOS: false

    }

const [errors, setErrors] = useState({
       
        name: "",
        size: "",
        Olives: false,
        Cheese: false,
        Pepperoni: false,
        Sausage: false,
        TOS: false

    })


     

    const PizzaForm = (props) => {
    let history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string()
            .trim()
            .required('please provide name.')
            .min(2, 'name must be at least 2 characters'),
        size: yup.string()
            .required('please provide a size'),
        Olives: yup.boolean(),
        Cheese: yup.boolean(),
        Pepperoni: yup.boolean(),
        Sausage: yup.boolean(),
        CB: yup.boolean(),
        TOS: yup.boolean().oneOf([true], "You must click agree to continue")
    })

    
    
    const [disabled, setDisabled] = useState(true)
    
    const {orderSubmit} = props

    const [ form, setForm ] = useState(initialForm)

    const formChange = (evt) => {
        validateChange(evt)
        console.log(evt.target.name, evt.target.value, evt.target.type)
        const value = evt.target.type === "checkbox" ? evt.target.checked :  evt.target.value
        setForm({...form, [evt.target.name]: value})
    }

    const submitButton = (evt) => {
        evt.preventDefault()
        orderSubmit(form)
        setForm(initialForm)
        history.push("/myOrder")
    }

    useEffect(()=> {
        formSchema.isValid(form).then((valid)=>{
            setDisabled(!valid)
        })
    }, [form])

    const prices = {
        "pizza": "$9.99"
    }

    const validateChange = (evt) => {
         yup.reach(formSchema, evt.target.name)
         .validate(
             evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
         )
         .then(()=>{
             setErrors({...errors, [evt.target.name]: ""})
         })
         .catch((error)=>{
             setErrors({...errors,[evt.target.name]: errors[0]})
         })
    }

    console.log(props)

    const { pizza } = useParams()

    return(
        <section className="pizza-form">
          <h2>
              { pizza } order form
          </h2>
          <p>starting as low as { prices.pizza }</p>
          <form onSubmit={submitButton}>
              <label>
                  Name:
                  <input onChange={formChange}
                   type="text" 
                   name="name" value={form.name} />
              </label>
              <label>
                  Dropbox
                  <h4>required</h4>:
                <select onChange={formChange}
                 value={form.size}
                 name="size">
                  <option value="">Please Select</option>  
                  <option value="small">Small</option>
                  <option value="medium">Meduim</option>
                  <option value="large">Large</option>
                  <option value="extra">Extra Large</option>
                </select>
              </label>
              <label><h3>Choose one</h3>
                   Olives
                  <input onChange={formChange} type="checkbox" name="Olives" checked={form.checkbox} />
              </label>

              <label>
                   Cheese
                  <input onChange={formChange} type="checkbox" name="Cheese" checked={form.checkbox} />
              </label>

              <label>
                   Pepperoni
                  <input onChange={formChange} type="checkbox" name="Pepperoni" checked={form.checkbox} />
              </label>
              
              <label>
                   Sausage
                  <input onChange={formChange} type="checkbox" name="Sausage" checked={form.checkbox} />
              </label>

              <label>
                  Terms Of Service:
                  <input onChange={formChange} type="checkbox" name="TOS" />
              </label>
              <button type="submit" disabled={disabled}>ORDER NOW!</button>
              <Pizza neworder = {newOrder}/>
          </form>
          <p>{errors.name}</p>
          <p>{errors.size}</p>
          <p>{errors.TOS}</p>
        </section>
    )
}

export default PizzaForm;