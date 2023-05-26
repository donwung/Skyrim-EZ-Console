import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Output from './components/output'

function App() {
    const [count, setCount] = useState(0)
    const [skills, setSkills] = useState({
        "enchanting": {
            "level": 0,
            "selected": false
        },
        "archery": {
            "level": 0,
            "selected": false
        }
    });
    const [isAdding, setIsAdding] = useState(true);

    const handleOnSkillSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const handleOnCheckedSkill = (skillName) => {
        let updatedSkill = {
            [skillName]: {}
        };

        console.log(skillName)
        if (skillName in skills) {
            // console.log("in skills")
            // console.log(skills[skillName])

            updatedSkill = {
                [skillName]: {
                    ...skills[skillName],
                    selected: !skills[skillName].selected,
                }
            }

            // console.log(updatedSkill[skillName])
            // console.log(skills)
            // console.log({ ...skills, [skillName]: updatedSkill[skillName] })
            setSkills({ ...skills, [skillName]: updatedSkill[skillName] })
        }
    }

    // TODO: condense checking and updating skill
    const handleOnSkillChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        let skillName = e.target.name;
        let skillValue = e.target.value;
        let updatedSkill = {
            [skillName]: {}
        };
        console.log(skillName)
        if (skillName in skills) {
            updatedSkill = {
                [skillName]: {
                    ...skills[skillName],
                    level: skillValue * 1,
                }
            }
            console.log(updatedSkill)
            setSkills({ ...skills, [skillName]: updatedSkill[skillName] })
        }
    }

    return (
        <div className="App">
            <h1>
                Skyrim Console Commander
            </h1>
            <div>
                <h2>TODO: to *JUST* SET</h2>
                <h2>Select a stat to SET:</h2>
                {/* TODO: Add the rest of the attributes */}
                <form onSubmit={(e) => { handleOnSkillSubmit(e) }}>
                    <div style={{ color: skills.enchanting.selected ? "green" : "grey" }}>
                        <input
                            type="checkbox"
                            name="enchanting"
                            onChange={(e) => { handleOnCheckedSkill(e.target.name) }}
                        ></input>
                        <label >Enchanting</label>
                        <input
                            type="number"
                            name="enchanting"
                            onChange={(e) => handleOnSkillChange(e)}
                        ></input>
                    </div>
                    <div style={{ color: skills.archery.selected ? "green" : "grey" }}>
                        {/* If checked, skill update gets sent to output for console command */}
                        <input
                            type="checkbox"
                            name="archery"
                            onChange={(e) => { handleOnCheckedSkill(e.target.name) }}
                        ></input>
                        <label >archery</label>
                        {/*  */}
                        <input
                            type="number"
                            name="archery"
                            onChange={(e) => handleOnSkillChange(e)}
                        ></input>
                    </div>
                    <button>Submit</button>
                </form>
                <button onClick={() => console.log(skills)}>DEBUG CLG</button>
                {/* <div>
            <label>Enchanting</label>
            <input type="number" onChange={(e) => handleOnSkillChange(e, "enchanting")}></input>
            </div>
          <button type="submit">Submit</button> */}
                {/* <Output skills={skills}></Output> */}
                <p>

                    {JSON.stringify(skills)}
                </p>
            </div >
        </div >
    )
}

export default App
