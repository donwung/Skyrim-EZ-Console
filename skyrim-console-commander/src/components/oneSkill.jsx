import { useState } from "react"
import ShowPerks from "./showPerks"
import sliderEnd from "../assets/sliderBorder.png"

const OneSkill = (props) => {
    const skill = props.skill
    const handleOnUpdateSkill = props.handleOnUpdateSkill

    // console.log(skill.perks)

    const [allPerks, setAllPerks] = useState(skill.perks)

    // console.log(allPerks)

    return (
        <div>
            <div className="oneSkill">
                <div className={(skill.selected ? "skillSelected" : "skillNotSelected") + " oneSkillHeader"}>
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
                    <div className={"rangeSlider rangeSliderSkill" + (skill.selected ? "skillSelected" : "skillNotSelected")}>
                        <img src={sliderEnd} className="flipped"></img>
                        <input
                            type="range"
                            name={skill.name.replace(/\s/g, '').toLowerCase()}
                            onChange={(e) => skill.selected && handleOnUpdateSkill(e, "value")}
                            // onMouseUp={() => console.log("set " + skill.name + " to " + skill.level)}
                            value={skill.selected ? skill.level : 0}
                            className="skillSlider"
                        ></input>
                        <img src={sliderEnd}></img>
                    </div>
                </div>
                <ShowPerks
                    perks={allPerks}
                    handleOnSetPerksOutput={props.handleOnSetPerksOutput}
                ></ShowPerks>
            </div>
        </div >
    )
}

export default OneSkill;