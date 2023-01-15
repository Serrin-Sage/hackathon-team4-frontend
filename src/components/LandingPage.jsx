import { useState } from "react"
import { useNavigate } from "react-router-dom"
const LandingPage = () => {
  const [admin, setAdmin] = useState(false)
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/staff/${input}`)
      .then(res => res.json())
      .then(data => {
        if (data.is_manager === true) navigate('/manager')
        else if (data.is_manager === false) navigate('/menu')
      })
      .catch(() => console.log("OOPS"))
  }

  return (
    <div>
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