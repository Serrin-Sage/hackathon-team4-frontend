import { useState, useEffect } from "react"

const StaffModal = ({ staff, setStaff, setViewStaff, displayNeon }) => {
    const [selectedStaff, setSelectedStaff] = useState({})
    const [showAssignForm, setShowAssignForm] = useState(false)

    let [sectionInput, setSectionInput] = useState("")

    const updateSection = (id, value) => {
        
        let newArray = staff.map((staffer) => {
            if (staffer.id === id) {
                return {...staffer, section : value}
            } else {
                return staffer
            }
        })
        setStaff(newArray)
    }

    const handleClick = ( clickedStaff ) => {
        setSelectedStaff(clickedStaff)
        setShowAssignForm(true)
    }
    
    const AssignSection = () => {
        return (
            <div className={`assign-table-form ${displayNeon ? 'neon-on' : 'neon-off'}`}>
                <div onClick={() => setShowAssignForm(false)} className={`exit-button ${displayNeon ? 'neon-on' : 'neon-off'}`}>X</div>
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch(`http://localhost:3000/assign_section/${selectedStaff.id}`, {
            method: "PATCH",    
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }, 
            body: JSON.stringify({
                section: e.target.section.value
            })
        })
        let res = await req.json()
        if (req.ok) {
            setSectionInput(e.target.section.value)
            updateSection(selectedStaff.id, e.target.section.value)
            setShowAssignForm(false)
        } else {
            console.log(req.errors)
        }
    }

    return (
        <div className={`staff-modal-container ${displayNeon ? 'neon-on' : 'neon-off'}`}>
            <div className={`exit-button ${displayNeon ? 'neon-on' : 'neon-off'}`} onClick={() => setViewStaff(false)} >X</div>
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
                                    <td className={staffer.clocked_in ? "clocked-in" : "clocked-out"} onClick={() => handleClick(staffer)}>{staffer.name}</td>
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