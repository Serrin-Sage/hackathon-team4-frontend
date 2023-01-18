
import { useNavigate } from "react-router-dom"

const MenuItemCategoryTile = ({ category }) => {

    function handleClick(){
        useNavigate(`/${category}`)
    }
    return (
        <button onClick={handleClick}>
            <h2>{category}</h2>
        </button>
    )
}

export default MenuItemCategoryTile