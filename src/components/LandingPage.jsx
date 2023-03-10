import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LandingPage = ({ setCurrentStaff }) => {
  const [admin, setAdmin] = useState(false)
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/staff/${input}`)
      .then(res => res.json())
      .then(data => {
        if (data.manager === true) navigate('/manager')

        else if (data.manager === false) {
          setCurrentStaff(data)
          navigate('/menu')
        }

      })
      .catch(() => console.log("No Such Route"))
  }

  return (
    <div className="login-container">
      <h1 className="ramen-title">R<span className="flicker-letter">A</span>MEN WAI<span className="sublte-flicker-letter">T</span>ER</h1>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <label className="input-label">
            Enter Employee ID <br />
            <input type="text" className="input-box" spellCheck={false} onChange={(e) => setInput(e.target.value)}/>
          </label>
        </form>
      </div>
    </div>
  )
}

export default LandingPage