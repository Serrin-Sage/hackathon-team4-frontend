import MenuItemCategoryTile from "./MenuItemCategoryTile"

const MenuCategoryNavBar = ({ renderCurrentItems }) => {

    return (
        <nav id="menu-item-bar">
            <ul id="menu-items-list">
                <li className="menu-category-name">
                    <MenuItemCategoryTile renderCurrentItems={renderCurrentItems}/>
                </li>
                <li className="menu-category-name">
                    <button>
                        <h2>Appetizers</h2>
                    </button>
                </li>
                <li className="menu-category-name">
                    <button>
                        <h2>Desserts</h2>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default MenuCategoryNavBar