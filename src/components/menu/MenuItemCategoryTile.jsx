
const MenuItemCategoryTile = ({ category, setCurrCategory }) => {
    return (
        <button onClick={()=>setCurrCategory(category)}>
            <h2>{category}</h2>
        </button>
    )
}

export default MenuItemCategoryTile