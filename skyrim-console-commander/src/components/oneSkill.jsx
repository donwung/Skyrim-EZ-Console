import { useState } from "react"

const OneSkill = (props) => {
    const skill = props.skill
    const handleOnCheckedSkill = props.handleOnCheckedSkill
    const handleOnSkillChange = props.handleOnSkillChange

    // console.log(skill.perks)

    const [allPerks, setAllPerks] = useState(skill.perks)

    console.log(allPerks)

    return (
        <div>
            <div style={{ color: skill.selected ? "green" : "grey" }}>
                <input
                    type="checkbox"
                    name={skill.name.replace(/\s/g, '').toLowerCase()}
                    onChange={(e) => { handleOnCheckedSkill(e.target.name) }}
                ></input>
                <label>{skill.name}</label>
                <input
                    type="number"
                    name={skill.name.replace(/\s/g, '').toLowerCase()}
                    onChange={(e) => skill.selected && handleOnSkillChange(e)}
                    value={skill.selected ? skill.level : 0}
                ></input>
            </div>
            <div>
                My perks here:
                {/* {showPerks(skill.perks)} */}
                {/* BUG: cannot print out multilevel perks */}
                {/* TODO: style buttons to look "normal" */}
                {/* TODO: make buttons add to skyrim console output */}
                {/* TODO: move perks to another component */}
                {Object.keys(allPerks).map((onePerk) => {
                    return (
                        <div>
                            <p style={{ textAlign: "left" }}>
                                {onePerk}: {allPerks[onePerk].description}
                                <br />
                                <button type="button" onClick={() => { console.log(allPerks[onePerk].ID) }}>
                                    ID: {allPerks[onePerk].ID}
                                </button>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OneSkill;