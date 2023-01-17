const MenuItemCategoryTile = ({ renderCurrentItems }) => {

    function handleClick() {
        renderCurrentItems(items.category)
    }

    return (
        <button onClick={handleClick}>
            <h2>Beverages</h2>
        </button>
    )
}

export default MenuItemCategoryTile