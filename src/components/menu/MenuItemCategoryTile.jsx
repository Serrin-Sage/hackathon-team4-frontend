
import { useNavigate } from "react-router-dom"

const MenuItemCategoryTile = ({ category }) => {
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/${category}`)
    }
    return (
        <button onClick={handleClick}>
            <h2>{category}</h2>
        </button>
    )
}

export default MenuItemCategoryTile