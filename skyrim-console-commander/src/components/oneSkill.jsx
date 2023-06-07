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
            <div className="oneSkill">
                <div style={{ color: skill.selected ? "white" : "grey", width: "100%" }}>
                    <input
                        type="checkbox"
                        name={skill.name.replace(/\s/g, '').toLowerCase()}
                        onChange={(e) => { handleOnUpdateSkill(e, "check") }}
                        id={"checkbox_" + skill.name.replace(/\s/g, '').toLowerCase()}
                        hidden
                    ></input>
                    <div className="oneSkill_title">
                        <label
                            className="glow"
                            htmlFor={"checkbox_" + skill.name.replace(/\s/g, '').toLowerCase()}>
                            {skill.name}</label>
                        <>{skill.level}</>
                    </div>
                    <input
                        type="range"
                        name={skill.name.replace(/\s/g, '').toLowerCase()}
                        onChange={(e) => skill.selected && handleOnUpdateSkill(e, "value")}
                        // onMouseUp={() => console.log("set " + skill.name + " to " + skill.level)}
                        value={skill.selected ? skill.level : 0}
                        className="skillSlider"
                    ></input>
                </div>
                <ShowPerks
                    perks={allPerks}
                    handleOnSetPerksOutput={props.handleOnSetPerksOutput}
                ></ShowPerks>
            </div>
        </div>
    )
}

export default OneSkill;