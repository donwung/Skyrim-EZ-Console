import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Output from './components/output'
import OneSkill from './components/oneSkill'

function App() {
    const [count, setCount] = useState(0)

    // TODO: add perks
    // TODO: refactor and move the data to another file
    // TODO: test effects of multilevel perks
    const [skills, setSkills] = useState({
        // mage skills
        "alteration": {
            "name": "Alteration",
            "technicalName": "alteration",
            "level": 0,
            "selected": false
        },
        "conjuration": {
            "name": "Conjuration",
            "technicalName": "conjuration",
            "level": 0,
            "selected": false
        },
        "destruction": {
            "name": "Destruction",
            "technicalName": "destruction",
            "level": 0,
            "selected": false
        },
        "enchanting": {
            "name": "Enchanting",
            "technicalName": "enchanting",
            "level": 0,
            "selected": false
        },
        "illusion": {
            "name": "Illusion",
            "technicalName": "illusion",
            "level": 0,
            "selected": false
        },
        "restoration": {
            "name": "Restoration",
            "technicalName": "restoration",
            "level": 0,
            "selected": false
        },
        // thief skills
        "archery": {
            "name": "Archery",
            "technicalName": "marksman",
            "level": 0,
            "selected": false,
            "perks": {
                "overdraw": {
                    "name": "Overdraw",
                    "rank": {
                        "1": {
                            "description": "Bows do 20 % more damage.",
                            "ID": "000babed"
                        },
                        "2": {
                            "description": "Bows do 40 % more damage.",
                            "ID": "0007934a"
                        },
                        "3": {
                            "description": "Bows do 60 % more damage.",
                            "ID": "0007934b"
                        },
                        "4": {
                            "description": "Bows do 80 % more damage.",
                            "ID": "0007934d"
                        },
                        "5": {
                            "description": "Bows do twice as much damage.",
                            "ID": "00079354"
                        }
                    }
                },
                "criticalShot": {},
                "huntersDiscipline": {}
            }
        },
        "alchemy": {
            "name": "Alchemy",
            "technicalName": "alchemy",
            "level": 0,
            "selected": false
        },
        "lightarmor": {
            "name": "Light Armor",
            "technicalName": "lightarmor",
            "level": 0,
            "selected": false
        },
        "lockpicking": {
            "name": "Lockpicking",
            "technicalName": "lockpicking",
            "level": 0,
            "selected": false
        },
        "pickpocket": {
            "name": "Pickpocket",
            "technicalName": "pickpocket",
            "level": 0,
            "selected": false
        },
        "sneak": {
            "name": "Sneak",
            "technicalName": "sneak",
            "level": 0,
            "selected": false
        },
        "speech": {
            "name": "Speech",
            "technicalName": "speechcraft",
            "level": 0,
            "selected": false
        },
        // warrior skills
        "block": {
            "name": "Block",
            "technicalName": "block",
            "level": 0,
            "selected": false
        },
        "heavyarmor": {
            "name": "Heavy Armor",
            "technicalName": "heavyarmor",
            "level": 0,
            "selected": false
        },
        "onehanded": {
            "name": "One Handed",
            "technicalName": "onehanded",
            "level": 0,
            "selected": false
        },
        "smithing": {
            "name": "Smithing",
            "technicalName": "smithing",
            "level": 0,
            "selected": false
        },
        "twohanded": {
            "name": "Two Handed",
            "technicalName": "twohanded",
            "level": 0,
            "selected": false
        },
    });
    const [allSelected, setAllSelected] = useState([])

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

    console.log(skills.archery.perks.overdraw.rank[1].ID)

    // TODO: condense checking and updating skill
    // 
    const handleOnSkillChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        let skillName = e.target.name.toLowerCase();
        let skillValue = e.target.value;
        let updatedSkill = {
            [skillName]: {}
        };
        // console.log(skillName)
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


    // DEBUG:
    const printAllSelected = () => {
        const allSelected = []
        let ret = "";


        for (const [key, value] of Object.entries(skills)) {
            if (value.selected) {
                console.log(key, value);
                allSelected.push({
                    [key]: value
                })
                ret += "player.setav " + value.technicalName + " " + value.level + " |||| "
            }
        }


        return (
            <div style={{ width: "50%" }}>
                {ret}
            </div>
        )
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
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.block}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.heavyarmor}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.onehanded}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.smithing}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.twohanded}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                        </div>
                        <div>
                            <h2>Mage Skills</h2>
                            <OneSkill
                                skill={skills.alteration}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.conjuration}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.destruction}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.enchanting}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.illusion}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.restoration}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                        </div>
                        <div>
                            <h2>Thief Skills</h2>
                            <OneSkill
                                skill={skills.alchemy}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.lightarmor}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.lockpicking}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.pickpocket}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.sneak}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.speech}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
                <button onClick={() => console.log(skills)}>DEBUG CLG</button>
                {
                    printAllSelected()
                }
                {/* <div>
            <label>Enchanting</label>
            <input type="number" onChange={(e) => handleOnSkillChange(e, "enchanting")}></input>
            </div>
          <button type="submit">Submit</button> */}
                {/* <Output skills={skills}></Output> */}
                {/* <p>

                    {JSON.stringify(skills)}
                </p> */}
            </div >
        </div >
    )
}

export default App
