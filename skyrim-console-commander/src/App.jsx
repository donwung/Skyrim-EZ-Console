import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SkillOutput from './components/skillOutput'
import PerkOutput from './components/perkOutput'
import OneSkill from './components/oneSkill'
import data from './components/data'

function App() {
    const [skills, setSkills] = useState(data);
    const [allSelected, setAllSelected] = useState([])

    const [perksOutput, setPerksOutput] = useState([]);

    const handleOnSkillSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

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
                    <div style={{ display: "flex" }} >
                        <div>
                            <h2>Warrior Skills</h2>
                            <OneSkill
                                skill={skills.archery}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.block}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.heavyarmor}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.onehanded}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.smithing}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.twohanded}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                        </div>
                        <div>
                            <h2>Mage Skills</h2>
                            <OneSkill
                                skill={skills.alteration}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.conjuration}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.destruction}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.enchanting}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.illusion}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.restoration}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                        </div>
                        <div>
                            <h2>Thief Skills</h2>
                            <OneSkill
                                skill={skills.alchemy}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.lightarmor}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.lockpicking}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.pickpocket}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.sneak}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.speech}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                            >
                            </OneSkill>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
                <button onClick={() => console.log(skills)}>DEBUG CLG</button>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <SkillOutput skills={skills}></SkillOutput>
                    <PerkOutput perks={perksOutput}></PerkOutput>
                </div>
            </div >
        </div >
    )
}

export default App
