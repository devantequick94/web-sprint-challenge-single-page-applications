import React from 'react';
import { useParams } from 'react-router-dom';



const OrderForm = (props) => {

    const { pizza } = useParams()

    return(
        <>hello i am an order form { pizza }</>
    )

}


export default PizzaForm;