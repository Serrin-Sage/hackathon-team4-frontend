import { useEffect, useState } from "react"

const DismissForm = ({ staff, setViewDimissForm }) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const [selectStaffer, setSelectedStaffer] = useState({})
    const [clockedInStaff, setClockedInStaff] = useState([])

    useEffect(() => {
        const staffEmployee = staff.filter(staff => staff.clocked_in === true)
        setClockedInStaff(staffEmployee)
    },[])

    const handleClick = ( clickedStaffer ) => {
        setShowConfirm(true)
        setSelectedStaffer(clickedStaffer)
    }

    const ConfirmDismiss = () => {
        
        return (
            <div className="confirm-container">
                Confirm Clock Out For: {selectStaffer.name}
                <div className="confirm-btns">
                    <button onClick={() => dismissStaffer()}>Yes</button>
                    <button onClick={() => setShowConfirm(false)}>No</button>
                </div>
            </div>
        )
    }

    const dismissStaffer = () => {
        fetch(`http://localhost:3000/staff/${selectStaffer.id}/clock_out`, {
            method: 'PATCH'
        })
        console.log(`${selectStaffer.name} has been dismissed`)
    }

    return (
        <div className="dismiss-container">
            <div className="dismiss-x" onClick={() => setViewDimissForm(false)}>X</div>
            <h2>Select Staff to Clock Out</h2>
            <div className="dismiss-list">
                {clockedInStaff.length === 0 ? <div>No Staff Currently Clocked In</div> : 
                <div>
                    {
                        clockedInStaff.map((staffer) => {
                            return (
                                <div key={staffer.id} className="staffer-name" onClick={() => handleClick(staffer)}>
                                    {staffer.name}
                                </div>
                            )
                        })
                    } 
                </div>
                }
            </div>
            {showConfirm ? <ConfirmDismiss /> : null}
        </div>
    )
}

export default DismissForm