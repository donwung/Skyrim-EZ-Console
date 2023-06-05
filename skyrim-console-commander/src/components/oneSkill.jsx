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
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label
                        className="glow"
                        for={"checkbox_" + skill.name.replace(/\s/g, '').toLowerCase()}>
                        {skill.name}</label>
                    <>{skill.level}</>
                </div>
                <input
                    type="range"
                    name={skill.name.replace(/\s/g, '').toLowerCase()}
                    onChange={(e) => skill.selected && handleOnUpdateSkill(e, "value")}
                    onMouseUp={() => console.log("set " + skill.name + " to " + skill.level)}
                    value={skill.selected ? skill.level : 0}
                    style={{width: "100%"}}
                ></input>

            </div>
            <ShowPerks perks={allPerks} handleOnSetPerksOutput={props.handleOnSetPerksOutput}></ShowPerks>
        </div>
    )
}

export default OneSkill;