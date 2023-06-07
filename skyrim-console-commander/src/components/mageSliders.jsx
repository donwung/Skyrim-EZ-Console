import OneSkill from "./oneSkill";
import { Link, Route, Routes, Navigate } from "react-router-dom";


const MageSliders = props => {
    const skills = props.skills;
    const handleOnUpdateSkill = props.handleOnUpdateSkill;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    console.log(skills)

    return (
        <div className="mageInput">
            <div className="navHeader">
                <Link to="../thief/">
                    <h2>Thief</h2>
                </Link>
                {/* <Link to="../mage/"> */}
                <h1>Mage</h1>
                {/* </Link> */}
                <Link to="../warrior/">
                    <h2>Warrior</h2>
                </Link>
            </div>
            <OneSkill
                skill={skills.alteration}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.conjuration}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.destruction}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.enchanting}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.illusion}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.restoration}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <div className="spacer_end"></div>
        </div>
    )
}

export default MageSliders