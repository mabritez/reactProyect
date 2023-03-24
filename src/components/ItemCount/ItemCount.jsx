import { useState } from "react";

function ItemCount({stock, onAdd}) {
    
    const [count, setCount] = useState(1);

    function decrement() {
        setCount(function(prev) {
            return prev - 1;
        });
    }

    function increment() {
        setCount(function(prev) {
            return prev + 1;
        });
    }

    function reset() {
        setCount(0);
    }
    
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>Eliminar Producto</button>
            <button onClick={increment}>Sumar Producto</button>
            <button onClick={function() { onAdd(count) }} disabled={stock===0}> Agregar al carrito</button>
            <button onClick={reset}>Resetear</button> 
        </div>
    );
}

export default ItemCount;
