const AddForm = ({ setViewAddForm, displayNeon, setStaff }) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch("http://localhost:3000/staff", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: e.target.name.value,
                password: "defaultPassword",
                manager: e.target.manager.checked
            })
        })
        let res = await req.json()
        if (req.ok) {
            console.log(res)
            setStaff((prevState) => {
                return [...prevState, res]
            })
            setViewAddForm(false)
        }
    }

    return (
        <div className={`add-form-container ${displayNeon ? 'neon-on' : 'neon-off'}`}>
            <div className={`exit-button ${displayNeon ? 'neon-on' : 'neon-off'}`} onClick={() => setViewAddForm(false)}>X</div>
            <form onSubmit={handleSubmit} autoComplete="new-password">
                <label>
                    Enter Employee Name <br/>
                    <input type="text" name="name" autoComplete="off" className={`add-form-input ${displayNeon ? 'neon-on' : 'neon-off'}`}/> <br/>
                </label>
                <br/>
                {/* <label>
                    Set Default Password <br/>
                    <input type="password" name="password" className={`add-form-input ${displayNeon ? 'neon-on' : 'neon-off'}`} /> <br/>
                </label> */}
                <br/>
                <label>
                    Manager?
                </label>
                <input type="checkbox" name="manager"/> 
                <br/>
                <br/>

                <input type="submit" value="Add" className={`add-btn ${displayNeon ? 'neon-on' : 'neon-off'}`} />
            </form>
        </div>
    )
}

export default AddForm