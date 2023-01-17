const AddForm = ({ setViewAddForm }) => {

    return (
        <div className="add-form-container">
            <div onClick={() => setViewAddForm(false)}>X</div>
            <form>
                <input type="text" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddForm