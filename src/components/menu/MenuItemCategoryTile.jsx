const MenuItemCategoryTile = ({ renderCurrentItems, allMenuItems }) => {
    // const [ category, id, name, order_id, price, stock_remaining ] = allMenuItems

    function handleClick(e) {
        // renderCurrentItems(category)
        // on click, console.log all items with category selected
        console.log(e.target.value)
    }

    return (
        <button onClick={handleClick} value={allMenuItems.category}>
            <h2>Beverages</h2>
        </button>
    )
}

export default MenuItemCategoryTile