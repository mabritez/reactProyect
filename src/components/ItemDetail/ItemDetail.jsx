import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

export default function ItemDetail(props) {
const {id, name, img, price, stock, description} = props;

function handleOnAdd(quantity) {
const objProduct = { id, name, price, quantity };
console.log(objProduct);
}

return (
<div>
<div className="item-detail">
<h2>{name}</h2>
<img src={img} alt={name} />
<p>precio ${price}</p>
<p>descripcion {description}</p>
<p>stock {stock}</p>
<ItemCount stock={stock} onAdd={handleOnAdd} />
</div>
</div>
);
}