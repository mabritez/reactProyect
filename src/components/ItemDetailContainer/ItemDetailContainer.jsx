import React, { useEffect ,useState } from "react";
import { getProductById } from "../AsincMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
const [product, setProduct] = useState({});
const { itemId } = useParams();

useEffect(() => {
const fetchProductById = async () => {
try {
const response = await getProductById(itemId);
setProduct(response);
} catch (error) {
console.log(error);
}
};
fetchProductById();
}, [itemId]);

return (
<div>
<h1>Detalle del producto</h1>
<ItemDetail id={product.id} name={product.name} img={product.img} price={product.price} stock={product.stock} description={product.description} />
</div>
);
}

export default ItemDetailContainer;