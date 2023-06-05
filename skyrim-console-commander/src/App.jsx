import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SkillOutput from './components/skillOutput'
import PerkOutput from './components/perkOutput'
import OneSkill from './components/oneSkill'
import data from './components/data'
import WarriorSliders from './components/warriorSliders'
import MageSliders from './components/mageSliders'
import ThiefSliders from './components/thiefSliders'
import { Link, Route, Routes, Navigate } from "react-router-dom";


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

        // if (!(updated in perksOutput)) {

        // }
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

    const onWheel = e => {
        // e.preventDefault();
        const container = document.getElementById("classifications");
        const containerScrollPosition = document.getElementById("classifications").scrollLeft;
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
            behaviour: "smooth"
        });
    };

    const handleOnPeekConsole = () => {

    }

    const handleOnShowConsole = () => {

    }

    return (
        <div className="App">
            <div>
                Input/Output Log
            </div>
            <div>
                School selection
            </div>
            <div>
                Sliders
                <div style={{ display: "flex", gap: "20px" }}>
                    <Link to="warrior/">Link to warrior</Link>
                    <Link to="thief/">Link to thief</Link>
                    <Link to="mage/">Link to mage</Link>
                </div>
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
            </div >
            <div
                onMouseEnter={() => handleOnPeekConsole()}
                onClick={() => handleOnShowConsole()}
            >
                {/* <button onClick={() => console.log(skills)}>DEBUG CLG</button> */}
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <SkillOutput skills={skills}></SkillOutput>
                    <PerkOutput perks={perksOutput}></PerkOutput>
                </div>
            </div >
        </div >
    )
}

export default App
