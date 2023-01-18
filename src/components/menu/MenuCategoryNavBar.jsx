import MenuItemCategoryTile from "./MenuItemCategoryTile"

const MenuCategoryNavBar = ({ renderCurrentItems, allMenuItems }) => {

    const [categories, setCategories] = useState([])

    function getCategories(){
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }

    // const avatars = convo.users.filter(u => {
    //     return u.username !== user.username
    //   }).map(user => {
    //     return (<Avatar key={user.id} src={user.avatar_url} />)
    //   })
    
    return (
        <nav id="menu-item-bar">
            {categories.categories.map(category => <MenuItemCategoryTile  category = {category}/>)}
        </nav>
    )
}

export default MenuCategoryNavBar