import ItemList from "../componets/ItemList"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import "../style/home.css"

function Home(){

    const [isLoading, setIsLoading] = useState(true)
    const [loadedItems, setLoadedItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/items').then(res => {
            return res.json()
        }).then(data =>{
            console.log(data)
            setIsLoading(false)
            setLoadedItems(data)
        })
    }, [])
    

    if (isLoading) {
        return(<div>Laeb...</div>)
    }

    return (
        <div className="items">
            <ItemList items={loadedItems}/>

            <Link to="add-item">
                <button className="additem">Lisa uus ese</button>
            </Link>
        </div>
    )
}

export default Home;