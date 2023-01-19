const MenuHeader = ({ currentStaff }) => {

    return (
        <div className="menu-header">
            Hello {currentStaff.name}
        </div>
    )
}

export default MenuHeader