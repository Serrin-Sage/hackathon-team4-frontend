const AddForm = ({ setViewAddForm }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/staff", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: e.target.name.value,
                password: e.target.password.value,
                manager: e.target.manager.value
            })
        })
    }

    return (
        <div className="add-form-container">
            <div className="add-exit" onClick={() => setViewAddForm(false)}>X</div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/> <br/>
                <input type="text" name="password"/> <br/>
                <input type="text" name="manager"/> <br/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddForm