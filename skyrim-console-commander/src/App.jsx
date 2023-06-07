import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
    const [allSelected, setAllSelected] = useState([])

    const [perksOutput, setPerksOutput] = useState([]);

    const handleOnUpdateSkill = (e, updateType) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log(updateType)

        const skillName = e.target.name.toLowerCase()
        const skillValue = e.target.value

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
        console.log(perk.name)
        console.log(perk.description)
        console.log(perk.ID)

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

    return (
        <div className="App">
            <div className="inputWindow">
                <Routes>
                    <Route path="/" element={<Navigate to="/warrior" replace></Navigate>}></Route>
                    <Route path="warrior" element={
                        <WarriorSliders
                            skills={skills}
                            handleOnUpdateSkill={handleOnUpdateSkill}
                            handleOnSetPerksOutput={handleOnSetPerksOutput}>
                        </WarriorSliders>}>
                    </Route>
                    <Route path="mage" element={
                        <MageSliders
                            skills={skills}
                            handleOnUpdateSkill={handleOnUpdateSkill}
                            handleOnSetPerksOutput={handleOnSetPerksOutput}>
                        </MageSliders>}>
                    </Route>
                    <Route path="thief" element={
                        <ThiefSliders
                            skills={skills}
                            handleOnUpdateSkill={handleOnUpdateSkill}
                            handleOnSetPerksOutput={handleOnSetPerksOutput}>
                        </ThiefSliders>}>
                    </Route>
                </Routes>
            </div>
            <ConsoleBar skills={skills} perksOutput={perksOutput}></ConsoleBar>

        </div>
    )
}

export default App
