import MenuItemTile from "./MenuItemTile"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"

const MenuItemsContainer = ({ category }) => {

    const [menuItems, setMenuItems] = useState([])
    const navigate = useNavigate()

    function getMenuItems(){
        fetch(`http://localhost:3000/menu_items/${category}`)
        .then(res=>res.json())
        .then(data=>setMenuItems(data))
    }

    function navClick(){
        navigate('/menu')
    }

    useEffect(getMenuItems, [])

    return (
        <div>
            <button onClick = {navClick}>Back to Menu</button>
            {menuItems.map(item => <MenuItemTile  item = {item}/>)}
        </div>
    )
}

export default MenuItemsContainer