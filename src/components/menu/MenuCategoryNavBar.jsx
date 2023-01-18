import MenuItemCategoryTile from "./MenuItemCategoryTile"

const MenuCategoryNavBar = ({ renderCurrentItems, allMenuItems }) => {

    const selectedMenuItems = allMenuItems.filter(function filterByCategory(items) {
        return items.category === "bev"
    })

    // const avatars = convo.users.filter(u => {
    //     return u.username !== user.username
    //   }).map(user => {
    //     return (<Avatar key={user.id} src={user.avatar_url} />)
    //   })
    
    return (
        <nav id="menu-item-bar">
            <ul id="menu-items-list">
                <li className="menu-category-name">
                </li>
            </ul>
        </nav>
    )
}

export default MenuCategoryNavBar