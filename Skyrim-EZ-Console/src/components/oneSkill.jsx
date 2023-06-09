import { useState } from "react"
import ShowPerks from "./showPerks"
import sliderEnd from "../assets/sliderBorder.png"

const OneSkill = (props) => {
    const handleOnUpdateSkill = props.handleOnUpdateSkill
    const skill = props.skill;
    const [allPerks, setAllPerks] = useState(skill.perks)

    const handleOnClickRangeEnd = (e, isIncreasing) => {
        let payload = {
            "name": e.name,
            "value": skill.level
        }
        if (skill.selected) {
            if (isIncreasing) {
                payload.value = payload.value >= 100 ? 100 : payload.value += 1
            } else {
                payload.value = payload.value <= 0 ? 0 : payload.value -= 1
            }
            handleOnUpdateSkill(payload, "value")
        }
    }

    return (
        <div>
            <div className="oneSkill">
                <div className={(skill.selected ? "skillSelected" : "skillNotSelected") + " oneSkillHeader"}>
                    <input
                        type="checkbox"
                        name={skill.name.replace(/\s/g, '').toLowerCase()}
                        onChange={(e) => { handleOnUpdateSkill(e.target, "check") }}
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
                    <div className={"rangeSlider centered rangeSliderSkill" + (skill.selected ? "skillSelected" : "skillNotSelected")}>
                        <img
                            src={sliderEnd}
                            className="flipped"
                            onClick={(e) => handleOnClickRangeEnd(e.target, false)}
                            name={skill.name.replace(/\s/g, '').toLowerCase()}
                        ></img>
                        <input
                            type="range"
                            name={skill.name.replace(/\s/g, '').toLowerCase()}
                            onChange={(e) => skill.selected && handleOnUpdateSkill(e.target, "value")}
                            // onChange={(e) => skill.selected && arrowTest(e.target)}
                            // onMouseUp={() => console.log("set " + skill.name + " to " + skill.level)}
                            value={skill.selected ? skill.level : 0}
                            className="skillSlider"
                        ></input>
                        <img
                            src={sliderEnd}
                            name={skill.name.replace(/\s/g, '').toLowerCase()}
                            onClick={(e) => handleOnClickRangeEnd(e.target, true)}></img>
                    </div>
                </div>
                <ShowPerks
                    perks={allPerks}
                    handleOnSetPerksOutput={props.handleOnSetPerksOutput}
                    selectedSkill={skill.name}
                ></ShowPerks>
            </div>
        </div >
    )
}

export default OneSkill;