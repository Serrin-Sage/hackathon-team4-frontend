import { useState } from "react"

const LandingPage = () => {
  const [admin, setAdmin] = useState(false)
  return (
    <div>
      <div className="top-tabs">
        <div className={admin ? "active" : "manager-tag"} onClick={() => setAdmin(true)}>
          Manager
        </div>
        <div className={admin ? "staff-tab" : "active"} onClick={() => setAdmin(false)}>
          Staff
        </div>
      </div>
      <div className="input-container">
        {admin ?
          <label className="input-label">
            Enter Manager ID <br />
            <input type="text" className="input-box" spellCheck={false} />
          </label> :
          <label className="input-label">
            Enter Staff ID <br />
            <input type="text" className="input-box" spellCheck={false} />
          </label>
        }
      </div>
    </div>
  )
}

export default LandingPage