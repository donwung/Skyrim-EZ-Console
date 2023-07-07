import { useState } from 'react'
import './App.css'

import OneSkill from './components/oneSkill'
import data from './components/data'
import WarriorSliders from './components/warriorSliders'
import MageSliders from './components/mageSliders'
import ThiefSliders from './components/thiefSliders'
import { Link, Route, Routes, Navigate } from "react-router-dom";
import ConsoleBar from './components/consoleBar'

function App() {
    const [skills, setSkills] = useState(data);
    const [perksOutput, setPerksOutput] = useState([]);

    const handleOnUpdateSkill = (skill, updateType) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log(updateType)

        const skillName = skill.name.toLowerCase()
        const skillValue = skill.value

        let updatedSkill = {
            [skillName]: {}
        }

        if (skillName in skills) {
            if (updateType == "check") {
                updatedSkill = {
                    [skillName]: {
                        ...skills[skillName],
                        selected: !skills[skillName].selected,
                    }
                }
            }
            if (updateType == "value") {
                updatedSkill = {
                    [skillName]: {
                        ...skills[skillName],
                        level: skillValue * 1,
                    }
                }
            }
            setSkills({ ...skills, [skillName]: updatedSkill[skillName] })
        }
    }

    const handleOnSetPerksOutput = (perk) => {
        // console.log(perk.name)
        // console.log(perk.description)
        // console.log(perk.ID)

        console.log("new perk added")
        const updated = {
            name: perk.name,
            ID: perk.ID
        }

        console.log(perksOutput.length)

        let canAppend = true;
        for (let i = 0; i < perksOutput.length; i++) {
            console.log(i)
            if (perksOutput[i].ID === updated.ID) {
                canAppend = false;
            }
        }
        console.log(canAppend)
        canAppend && setPerksOutput([...perksOutput, updated])
        console.log(perksOutput)
    }

    const handleOnRemoveFromPerksOutput = (ID, idx) => {
        // console.log("removing perk")
        // console.log("at ID=" + ID)
        // console.log("at idx=" + idx)
        console.log(perksOutput)
        console.log(perksOutput[idx])
        const updated = [...perksOutput]
        if(idx > -1){
            updated.splice(idx, 1)
        }
        console.log(updated)
        setPerksOutput(updated)

    }

    return (
        <div className="App">
            <div className="inputWindow">
                <Routes>
                    <Route path="/warrior" element={
                        <WarriorSliders
                            skills={skills}
                            handleOnUpdateSkill={handleOnUpdateSkill}
                            handleOnSetPerksOutput={handleOnSetPerksOutput}>
                        </WarriorSliders>}>
                    </Route>
                    <Route path="/mage" element={
                        <MageSliders
                            skills={skills}
                            handleOnUpdateSkill={handleOnUpdateSkill}
                            handleOnSetPerksOutput={handleOnSetPerksOutput}
                            perksOutput={perksOutput}
                            >
                        </MageSliders>}>
                    </Route>
                    <Route path="/thief" element={
                        <ThiefSliders
                            skills={skills}
                            handleOnUpdateSkill={handleOnUpdateSkill}
                            handleOnSetPerksOutput={handleOnSetPerksOutput}>
                        </ThiefSliders>}>
                    </Route>
                    <Route path="/*" element={<Navigate to="/warrior" ></Navigate>}></Route>
                </Routes>
            </div>
            <ConsoleBar skills={skills} perksOutput={perksOutput} handleOnRemoveFromPerksOutput={handleOnRemoveFromPerksOutput}></ConsoleBar>

        </div>
    )
}

export default App
