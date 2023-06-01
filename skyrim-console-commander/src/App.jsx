import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SkillOutput from './components/skillOutput'
import OneSkill from './components/oneSkill'
import data from './components/data'

function App() {
    const [count, setCount] = useState(0)

    // TODO: add perks
    // TODO: refactor and move the data to another file

    // NOTE: two tabs for schools, four tabs for perks, six tabs for perk RANK
    const [skills, setSkills] = useState(data);
    const [allSelected, setAllSelected] = useState([])

    const [isAdding, setIsAdding] = useState(true);

    const handleOnSkillSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const [finalizedSkills, setFinalizedSkills] = useState({
        "skills": [], // {skillname : desiredlevel}, {skillname : desiredlevel}, {skillname : desiredlevel}, etc
    })
    const [finalizedPerks, setFinalizedPerks] = useState({
        "perks": [] // {perkname : perkid}, {perkname : perkid}, {perkname : perkid}, etc
    })

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
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.block}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.heavyarmor}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.onehanded}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.smithing}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.twohanded}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                        </div>
                        <div>
                            <h2>Mage Skills</h2>
                            <OneSkill
                                skill={skills.alteration}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.conjuration}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.destruction}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.enchanting}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.illusion}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.restoration}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                        </div>
                        <div>
                            <h2>Thief Skills</h2>
                            <OneSkill
                                skill={skills.alchemy}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.lightarmor}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.lockpicking}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.pickpocket}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.sneak}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                            <OneSkill
                                skill={skills.speech}
                                handleOnUpdateSkill={handleOnUpdateSkill}
                            >
                            </OneSkill>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
                <button onClick={() => console.log(skills)}>DEBUG CLG</button>
                <SkillOutput skills={skills}></SkillOutput>
                {/* <PerkOutput></PerkOutput> */}
            </div >
        </div >
    )
}

export default App
