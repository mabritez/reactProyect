import './ItemListContainer.css'

const ItemListContainer = (props)=> {
    return(
        <div>
            <h1 className="saludo1"> {props.greeting}</h1>
            <h2 className="saludo2">{props.greeting2}</h2>
        </div>
        
        
    )
}

export default ItemListContainer