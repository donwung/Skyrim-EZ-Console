import { useState } from 'react'
import './App.css'

import OneSkill from './components/oneSkill'
import data from './components/data'
import WarriorSliders from './components/warriorSliders'
import MageSliders from './components/mageSliders'
import ThiefSliders from './components/thiefSliders'
import Help from './components/help'
import Credits from './components/credits'
import { Link, Route, Routes, Navigate } from "react-router-dom";
import ConsoleBar from './components/consoleBar'

function App() {
    const [skills, setSkills] = useState(data);
    const [perksOutput, setPerksOutput] = useState([]);

    const handleOnUpdateSkill = (skill, updateType) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log(updateType)

        const skillName = skill.name.toLowerCase().replace(/\s/g, '')
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

    const handleOnSetPerksOutput = (perk, action) => {
        if (action === "remove") {
            console.log("removing from perksOutput")
            handleOnRemoveFromPerksOutput(perk.ID)
        } else {
            addToPerksOutput(perk)
        }
    }

    const addToPerksOutput = (perk) => {
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

    const handleOnRemoveFromPerksOutput = (ID) => {
        const idx = findPerksOutputIdxByID(ID)
        removeFromPerksOutput(idx)
    }

    const findPerksOutputIdxByID = (ID) => {
        for (let idx = 0; idx < perksOutput.length; idx++) {
            if (perksOutput[idx].ID === ID) {
                return idx
            }
        }
    }

    const removeFromPerksOutput = (idx) => {
        console.log(perksOutput)
        console.log(perksOutput[idx])
        const updated = [...perksOutput]
        if (idx > -1) {
            updated.splice(idx, 1)
        }
        console.log(updated)
        setPerksOutput(updated)
    }

    return (
        <div className="App">
            <Help></Help>
            <Credits></Credits>
            <div className="inputWindow">
                <Routes>
                    <Route path="/warrior" element={
                        <WarriorSliders
                            skills={skills}
                            handleOnUpdateSkill={handleOnUpdateSkill}
                            handleOnSetPerksOutput={handleOnSetPerksOutput}
                            perksOutput={perksOutput}
                        >
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
                            handleOnSetPerksOutput={handleOnSetPerksOutput}
                            perksOutput={perksOutput}
                        >
                        </ThiefSliders>}>
                    </Route>
                    <Route path="/*" element={<Navigate to="/warrior" ></Navigate>}></Route>
                </Routes>
            </div>
            <ConsoleBar
                skills={skills}
                perksOutput={perksOutput}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnRemoveFromPerksOutput={handleOnRemoveFromPerksOutput}>
            </ConsoleBar>
        </div>
    )
}

export default App
