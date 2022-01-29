import React from 'react';

function MyOrder (props) {

    const {myOrder} = props
    return (
        <section>
        <h2>
            MyOrder
        </h2>
          <p>name: {myOrder.name}</p>
          <p>size: {myOrder.size}</p>  
          


          
          
        </section>
    )
}


export default MyOrder