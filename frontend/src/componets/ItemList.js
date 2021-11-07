import Item from "../componets/Item";
import "../style/itemlist.css"

function ItemList(props){
    return(
        <div className="container">
            {props.items.map(item=>(
                <Item 
                key={item.key} 
                name={item.name} 
                price={item.price}
                category={item.category} className="list"></Item>
            ))}
        </div>
    )
}

export default ItemList