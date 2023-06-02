import { useState } from "react"
import ShowPerks from "./showPerks"

const OneSkill = (props) => {
    const skill = props.skill
    const handleOnUpdateSkill = props.handleOnUpdateSkill

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
                    id={"checkbox_" + skill.name.replace(/\s/g, '').toLowerCase()}
                    hidden
                ></input>
                <label
                    className="glow"
                    for={"checkbox_" + skill.name.replace(/\s/g, '').toLowerCase()}>
                    {skill.name}</label>
                <input
                    type="number"
                    name={skill.name.replace(/\s/g, '').toLowerCase()}
                    onChange={(e) => skill.selected && handleOnUpdateSkill(e, "value")}
                    value={skill.selected ? skill.level : 0}
                ></input>
            </div>
            <ShowPerks perks={allPerks} handleOnSetPerksOutput={props.handleOnSetPerksOutput}></ShowPerks>
        </div>
    )
}

export default OneSkill;