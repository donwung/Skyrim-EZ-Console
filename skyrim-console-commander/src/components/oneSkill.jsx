import { useState } from "react"

const OneSkill = (props) => {
    const skill = props.skill
    const handleOnUpdateSkill = props.handleOnUpdateSkill
    const handleOnCheckedSkill = props.handleOnCheckedSkill
    const handleOnSkillChange = props.handleOnSkillChange
    const [showPerks, setShowPerks] = useState(false)

    // console.log(skill.perks)

    const [allPerks, setAllPerks] = useState(skill.perks)

    // console.log(allPerks)

    return (
        <div>
            <div style={{ color: skill.selected ? "green" : "grey" }}>
                <input
                    type="checkbox"
                    name={skill.name.replace(/\s/g, '').toLowerCase()}
                    onChange={(e) => { handleOnUpdateSkill(e, "check") }}
                ></input>
                <label>{skill.name}</label>
                <input
                    type="number"
                    name={skill.name.replace(/\s/g, '').toLowerCase()}
                    onChange={(e) => skill.selected && handleOnUpdateSkill(e, "value")}
                    value={skill.selected ? skill.level : 0}
                ></input>
            </div>
            <p onClick={() => setShowPerks(!showPerks)}>
                Show Perks
            </p>
            <div style={showPerks ? { backgroundColor: "green" } : { display: "none" }}>
                {/* {showPerks(skill.perks)} */}
                {/* BUG: cannot print out multilevel perks */}
                {/* TODO: style buttons to look "normal" */}
                {/* TODO: make buttons add to skyrim console output */}
                {/* TODO: move perks to another component */}
                {Object.keys(allPerks).map((onePerk) => {
                    const rankedPerksArr = []
                    // console.log(onePerk)
                    if ("rank" in allPerks[onePerk]) {
                        // console.log("haggling perk")
                        // console.log(allPerks[onePerk])
                        for (let key in allPerks[onePerk].rank) {
                            rankedPerksArr.push(allPerks[onePerk].rank[key])
                            // console.log(key)
                            // console.log(allPerks[onePerk].rank[key].description)
                        }
                    }


                    return (
                        <div>
                            <p style={{ textAlign: "left" }}>

                                <h2>
                                    {onePerk}:
                                </h2>
                                <div style={{ border: "2px solid white" }}>

                                </div>
                                {allPerks[onePerk].description && <p>{allPerks[onePerk].description}</p>}
                                {rankedPerksArr.map((val) => {
                                    return (
                                        <div>
                                            <p>{val.description}</p>
                                            <button type="button" onClick={() => { console.log(val.ID) }}>
                                                ID: {val.ID}
                                            </button>
                                        </div>
                                    )
                                })}
                                {
                                    allPerks[onePerk].ID &&
                                    <button type="button" onClick={() => { console.log(allPerks[onePerk].ID) }}>
                                        ID: {allPerks[onePerk].ID}
                                    </button>
                                }
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OneSkill;