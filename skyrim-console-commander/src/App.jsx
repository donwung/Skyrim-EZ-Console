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
    // TODO: remember add names to perks 


    // NOTE: two tabs for schools, four tabs for perks, six tabs for perk RANK
    const [skills, setSkills] = useState({
        // mage skills
        "alteration": {
            "name": "Alteration",
            "technicalName": "alteration",
            "level": 0,
            "selected": false,
            "perks": {
                "Novice Alteration": {
                    "description": "Cast Novice level Alteration spells for half magicka.",
                    "ID": "000f2ca6"
                },
                "Alteration Dual Casting": {
                    "description": "Dual casting an Alteration spell overcharges the effects into an even more powerful version.��",
                    "ID": "000153cd"
                },
                "Apprentice Alteration": {
                    "description": "Cast Apprentice level Alteration spells for half magicka.",
                    "ID": "000c44b7"
                },
                "Magic Resistance": {
                    "rank": {
                        "1": {
                            "description": "Blocks 10% of a spell's effects.",
                            "ID": "00053128"
                        },
                        "2": {
                            "description": "Blocks 20% of a spell's effects.",
                            "ID": "00053129"
                        },
                        "3": {
                            "description": "Blocks 30% of a spell's effects.",
                            "ID": "0005312a"
                        }
                    },
                },
                "Adept Alteration": {
                    "description": "Cast Adept level Alteration spells for half magicka.",
                    "ID": "000c44b8"
                },
                "Expert Alteration": {
                    "description": "Cast Expert level Alteration spells for half magicka.",
                    "ID": "000c44b9"
                },
                "Atronach": {
                    "description": "Absorb 30% of the magicka of any spells that hit you.",
                    "ID": "000581f7"
                },
                "Master Alteration": {
                    "description": "Cast Master level Alteration spells for half magicka.",
                    "ID": "000c44ba"
                },
                "Stability": {
                    "description": "Alteration spells have 50% greater duration.��",
                    "ID": "000581fc"
                },
                "Mage Armor": {
                    "rank": {
                        "1": {
                            "description": "Protection spells like Stoneflesh are twice as strong if not wearing armor.",
                            "ID": "000d7999"
                        },
                        "2": {
                            "description": "Protection spells like Stoneflesh are 2.5 times as strong if not wearing armor.",
                            "ID": "000d799a"
                        },
                        "3": {
                            "description": "Protection spells like Stoneflesh are three times as strong if not wearing armor.",
                            "ID": "000d799b"
                        }
                    },
                },
            }
        },
        "conjuration": {
            "name": "Conjuration",
            "technicalName": "conjuration",
            "level": 0,
            "selected": false,
            "perks": {
                "Novice Conjuration": {
                    "description": "Cast Novice level Conjuration spells for half magicka.",
                    "ID": "000f2ca7"
                },
                "Apprentice Conjuration": {
                    "description": "Cast Apprentice level Conjuration spells for half magicka.",
                    "ID": "000c44bb"
                },
                "Adept Conjuration": {
                    "description": "Cast Adept level Conjuration spells for half magicka.",
                    "ID": "000c44bc"
                },
                "Expert Conjuration": {
                    "description": "Cast Expert level Conjuration spells for half magicka.",
                    "ID": "000c44bd"
                },
                "Master Conjuration": {
                    "description": "Cast Master level Conjuration spells for half magicka.",
                    "ID": "000c44be"
                },
                "Conjuration Dual Casting": {
                    "description": "Dual casting a Conjuration spell overcharges the spell, allowing it to last longer.",
                    "ID": "000153ce"
                },
                "Mystic Binding": {
                    "description": "Bound weapons do more damage.",
                    "ID": "000640b3"
                },
                "Soul Stealer": {
                    "description": "Bound weapons cast Soul Trap on targets.",
                    "ID": "000d799e"
                },
                "Oblivion Binding": {
                    "description": "Bound weapons will banish summoned creatures and turn raised ones.",
                    "ID": "000d799c"
                },
                "Necromancy": {
                    "description": "Greater duration for reanimated undead.",
                    "ID": "000581dd"
                },
                "Dark Souls": {
                    "ID": "000581de"
                },
                "Summoner": {
                    "rank": {
                        "1": {
                            "description": "Can summon atronachs or raise undead twice as far away.[2]",
                            "ID": "00105f30"
                        },
                        "2": {
                            "description": "Can summon atronachs or raise undead three times as far away.[2]",
                            "ID": "00105f31"
                        }
                    }
                },
                "Atromancy": {
                    "description": "Double duration for conjured Atronachs.[2]",
                    "ID": "000cb419"
                },
                "Elemental Potency": {
                    "description": "Conjured Atronachs are 50% more powerful.",
                    "ID": "000cb41a"
                },
                "Twin Souls": {
                    "description": "You can have two atronachs or reanimated zombies.[2]",
                    "ID": "000d5f1c"
                },
            }

        },
        "destruction": {
            "name": "Destruction",
            "technicalName": "destruction",
            "level": 0,
            "selected": false,
            "perks": {
                "Novice Destruction": {
                    "description": "Cast Novice level Destruction spells for half magicka.",
                    "ID": "000f2ca8"
                },
                "Apprentice Destruction": {
                    "description": "Cast Apprentice level Destruction spells for half magicka.",
                    "ID": "000c44bf"
                },
                "Adept Destruction": {
                    "description": "Cast Adept level Destruction spells for half magicka.",
                    "ID": "000c44c0"
                },
                "Expert Destruction": {
                    "description": "Cast Expert level Destruction spells for half magicka.",
                    "ID": "000c44c1"
                },
                "Master Destruction": {
                    "description": "Cast Master level Destruction spells for half magicka.",
                    "ID": "000c44c2"
                },
                "Rune Master": {
                    "description": "Can place runes five times farther away.",
                    "ID": "00105f32"
                },
                "Augmented Flames": {
                    "rank": {
                        "1": {
                            "description": "Fire spells do 25% more damage.",
                            "ID": "000581e7"
                        },
                        "2": {
                            "description": "Fire spells do 50% more damage.",
                            "ID": "0010fcf8"
                        },
                    }
                },
                "Intense Flames": {
                    "description": "Fire damage causes targets to flee if their health is low (under 20%).",
                    "ID": "000f392e"
                },
                "Augmented Frost": {
                    "rank": {
                        "1": {
                            "description": "Frost spells do 25% more damage.",
                            "ID": "000581ea"
                        },
                        "2": {
                            "description": "Frost spells do 50% more damage.",
                            "ID": "0010fcf9"
                        },
                    },
                },
                "Deep Freeze": {
                    "description": "Frost damage paralyzes targets if their health is low (under 20%).�",
                    "ID": "000f3933"
                },
                "Augmented Shock": {
                    "rank": {
                        "1": {
                            "description": "Shock spells do 25% more damage.",
                            "ID": "00058200"
                        },
                        "2": {
                            "description": "Shock spells do 50% more damage.",
                            "ID": "0010fcfa"
                        }
                    },
                },
                "Disintegrate": {
                    "description": "Shock spells disintegrate targets if their health is low (under 15%).",
                    "ID": "000f3f0e"
                },
                "Destruction Dual Casting": {
                    "description": "Dual casting a Destruction spell overcharges the effects into an even more powerful version.",
                    "ID": "000153cf"
                },
                "Impact": {
                    "description": "Most destruction spells will stagger an opponent when dual cast.",
                    "ID": "000153d2"
                },
            }
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
                "criticalShot": {
                    "rank": {
                        "1": {
                            "description": "10% chance of a critical hit that does extra damage.",
                            "ID": "00105f1c"
                        },
                        "2": {
                            "description": "15% chance of a critical hit that does 25% more critical damage.",
                            "ID": "00105f1e"
                        }
                    },
                },
                "huntersDiscipline": {
                    "rank": {
                        "1": {
                            "description": "Recover twice as many arrows from dead bodies.",
                            "ID": "00051b12"
                        }
                    }
                },
                "ranger": {
                    "rank": {
                        "1": {
                            "description": "Able to move faster with a drawn bow.",
                            "ID": "00058f63"
                        }
                    }
                },
                "eagleEye": {
                    "description": "Pressing Block while aiming will zoom in your view.",
                    "ID": "00058f61"
                },
                "powerShot": {
                    "description": "Arrows stagger all but the largest opponents 50% of the time.",
                    "ID": "00058f62"
                },
                "quickShot": {
                    "description": "Can draw a bow 30% faster.",
                    "ID": "00105f19"
                },
                "steadyHand": {
                    "rank": {
                        "1": {
                            "description": "Zooming in with a bow slows time by 25%.",
                            "ID": "00103ada"
                        },
                        "2": {
                            "description": "Zooming in with a bow slows time by 50%.",
                            "ID": "00103adb"
                        }
                    }
                },
                "bullseye": {
                    "description": "15% chance of paralyzing the target for a few seconds.",
                    "ID": "00058f64"
                }
            }
        },
        "alchemy": {
            "name": "Alchemy",
            "technicalName": "alchemy",
            "level": 0,
            "selected": false,
            "perks": {
                "Alchemist": {
                    "rank": {
                        "1": {
                            "description": "Potions and poisons you make are 20% stronger.",
                            "ID": "000be127"
                        },
                        "2": {
                            "description": "Potions and poisons you make are 40% stronger.",
                            "ID": "000c07ca"
                        },
                        "3": {
                            "description": "Potions and poisons you make are 60% stronger.",
                            "ID": "000c07cb"
                        },
                        "4": {
                            "description": "Potions and poisons you make are 80% stronger.",
                            "ID": "000c07cc"
                        },
                        "5": {
                            "description": "Potions and poisons you make are twice as strong.",
                            "ID": "000c07cd"
                        }
                    }
                },
                "Physician": {
                    "description": "Potions you mix that restore Health, Magicka or Stamina are 25% more powerful.",
                    "ID": "00058215"
                },
                "Benefactor": {
                    "description": "Potions you mix with beneficial effects have an additional 25% greater magnitude.",
                    "ID": "00058216"
                },
                "Experimenter": {
                    "1": {
                        "description": "Eating an ingredient reveals first two effects.",
                        "ID": "00058218"
                    },
                    "2": {
                        "description": "Eating an ingredient reveals first three effects.",
                        "ID": "00105f2a"
                    },
                    "3": {
                        "description": "Eating an ingredient reveals all its effects.",
                        "ID": "00105f2b"
                    }
                },
                "Poisoner": {
                    "description": "Poisons you mix are 25% more effective.",
                    "ID": "00058217"
                },
                "Concentrated Poison": {
                    "description": "Poisons applied to weapons last for twice as many hits.",
                    "ID": "00105f2f"
                },
                "Green Thumb": {
                    "description": "Two ingredients are gathered from plants.�",
                    "ID": "00105f2e"
                },
                "Snakeblood": {
                    "description": "50% resistance to all poisons.",
                    "ID": "00105f2c"
                },
                "Purity": {
                    "description": "All negative effects are removed from created potions, and all positive effects are removed from created poisons.",
                    "ID": "0005821d"
                },
            },
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
