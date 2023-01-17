import { useState, useEffect } from "react"

const StaffModal = ({ setViewStaff }) => {
    const [staff, setStaff] = useState([])
    const [selectedStaff, setSelectedStaff] = useState({})
    const [showAssignForm, setShowAssignForm] = useState(false)

    let [sectionInput, setSectionInput] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/staff")
            .then((res) => res.json())
            .then((data) => {
                const staffEmployee = data.filter(staff => staff.manager === false)
                setStaff(staffEmployee)
            })
    }, [])

    const handleClick = ( clickedStaff ) => {
        setSelectedStaff(clickedStaff)
        setShowAssignForm(true)
    }
    
    const AssignSection = () => {
        return (
            <div className="assign-table-form">
                <div onClick={() => setShowAssignForm(false)} className="assign-exit">X</div>
                <br />
                Assign {selectedStaff.name} to a section
                <br/>
                <br/>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="section" spellCheck={false} />
                </form>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/assign_section/${selectedStaff.id}`, {
            method: "PATCH",    
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }, 
            body: JSON.stringify({
                section: e.target.section.value
            })
        })
        setSectionInput(e.target.section.value)
        setSelectedStaff({...selectedStaff, section : sectionInput})
        setShowAssignForm(false)
    }

    return (
        <div className="staff-modal-container">
            <div className="exit-button" onClick={() => setViewStaff(false)} >X</div>
            <h2 className="staff-list-title">Staff List</h2>
            <table>
                <thead>
                    <tr className="table-row-top">
                        <th className="table-header">Name</th>
                        <th className="table-header">Clocked In</th>
                        <th className="table-header">Section</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staff.map((staffer) => {
                            return (
                                <tr key={staffer.id}>
                                    <td className={staff.clocked_in ? "clocked-in" : "clocked-out"} onClick={() => handleClick(staffer)}>{staffer.name}</td>
                                    <td >{staffer.clocked_in ? "✅" : "❌"}</td>
                                    <td>{staffer.section}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {showAssignForm ? <AssignSection /> : null}
        </div>
    )
}

export default StaffModal