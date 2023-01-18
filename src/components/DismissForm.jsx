import { useEffect, useState } from "react"

const DismissForm = ({ staff, setViewDimissForm, displayNeon }) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const [selectedStaffer, setSelectedStaffer] = useState({})
    const [clockedInStaff, setClockedInStaff] = useState([])
    
    useEffect(() => {
        const staffEmployee = staff.filter(staff => staff.clocked_in === true)
        setClockedInStaff(staffEmployee)
    },[])
    
    const updateClockIn = (id) => {
        let newClockInArray = staff.map((staffer) => {
            if (staffer.id !== id) {
                return {...staffer, clocked_in : true }
            } else {
                return staffer
            }
        })
        let filterClockIn = clockedInStaff.filter((staffer) => {
            staffer.id !== id
        })
        setClockedInStaff(filterClockIn)
    }
    
    const handleClick = ( clickedStaffer ) => {
        setShowConfirm(true)
        setSelectedStaffer(clickedStaffer)
    }

    const ConfirmDismiss = () => {
        
        return (
            <div className="confirm-container">
                Confirm Clock Out For: {selectedStaffer.name}
                <div className="confirm-btns">
                    <button onClick={() => dismissStaffer()}>Yes</button>
                    <button onClick={() => setShowConfirm(false)}>No</button>
                </div>
            </div>
        )
    }

    const dismissStaffer = async () => {
        let req = await fetch(`http://localhost:3000/staff/${selectedStaffer.id}/clock_out`, {
            method: 'PATCH'
        })
        let res = await req.json()
        if (req.ok){
            console.log(`${selectedStaffer.name} has been dismissed`)
            updateClockIn(selectedStaffer.id)
        }
    }

    return (
        <div className={`dismiss-container ${displayNeon ? 'neon-on' : 'neon-off'}`}>
            <div className={`exit-button ${displayNeon ? 'neon-on' : 'neon-off'}`} onClick={() => setViewDimissForm(false)}>X</div>
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
                    {showConfirm ? <ConfirmDismiss /> : null}
                </div>
                }
            </div>
            
        </div>
    )
}

export default DismissForm