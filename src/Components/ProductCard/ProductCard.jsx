import React, { useState } from 'react'

function ProductCard({ product }) {




    const [counter, setcounter] = useState(1)

    const increment = () => { if (counter < product.stock) setcounter(counter + 1) };
    const decrement = () => { if (counter > 0) setcounter(counter - 1) };


    return (

        <section className="ProductCard">
            

            <p>{product.title}</p>
            <img src={product.thumbnail} alt="" />


                <h2>{counter}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button>add to cart</button>
        </section>


    )
}

export default ProductCard