import {useRef} from 'react';
import './AddItemForm.css';

function AddItemForm(props) {
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    function formSubmitHandler(e){
        e.preventDefault();

        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const item = {
            "name": nameValue,
            "price": priceValue,
            "category": categoryValue, 
        }
        props.onAddItem(item);

        alert("Toode lisatud");
    }
    return (
    <form onSubmit={formSubmitHandler}>
        <h1>Lisa uus ese</h1>
        <label>Eseme nimi</label><br />
        <input type="text" placeholder="Nimi" required ref={nameInputRef}/><br/>
        <label>Eseme hind</label><br />
        <input type="text" placeholder="Hind" required  ref={priceInputRef}/><br/>
        <label>Kategooria</label><br />
        <input type="text" placeholder="Kategooria" required  ref={categoryInputRef}/><br/>
        <button className="additembutton">Lisa ese</button>
    </form>
    );
}

export default AddItemForm;