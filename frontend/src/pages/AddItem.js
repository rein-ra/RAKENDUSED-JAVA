import AddItemForm from "../componets/AddItemForm";
import "../style/additem.css"



function AddItem(){
    function itemSubmitHandler(item){
        fetch('http://localhost:8080/items', {
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                'Content-type' : 'application/json'
            }
        })
    }
    return (
        <div className="form">
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    )
}

export default AddItem;