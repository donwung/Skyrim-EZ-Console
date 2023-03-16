import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Output from './components/output'

function App() {
  const [count, setCount] = useState(0)
  const [marksman, setMarksman] = useState(0)
  const [enchanting, setEnchanting] = useState(undefined)
  const [skills, setSkills] = useState({});

  const handleOnSkillChange = (e, skillChanged) => {
    let updated = { ...skills, [skillChanged]: e.target.value * 1 };
    let input = e.target.value;

    if (input === "") {
      // removes key if no value is input
      delete updated[skillChanged]
    }
    if (input * 1 > 100) {
      input = 100;
    } else if (input * 1 < 0) {
      input = 0;
    }

    updated = { ...skills, [skillChanged]: input };

    setSkills(updated)
  }

  return (
    <div className="App">
      <h1>
        Skyrim Console Commander
      </h1>
      <div>
        <h2>TODO: allow user to ADD or SET</h2>
        <h2>Select a stat to SET:</h2>
        <form>
          <div>
            <label>Archery</label>
            <input type="number" onChange={(e) => handleOnSkillChange(e, "marksman")}></input>
          </div>
          <div>
            <label>Enchanting</label>
            <input type="number" onChange={(e) => handleOnSkillChange(e, "enchanting")}></input>
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
        <Output skills={skills}></Output>
      </div>
    </div>
  )
}

export default App
