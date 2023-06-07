import OneSkill from "./oneSkill";
import { Link, Route, Routes, Navigate } from "react-router-dom";


const ThiefSliders = props => {
    const skills = props.skills;
    const handleOnUpdateSkill = props.handleOnUpdateSkill;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    console.log(skills)

    return (
        <div className="thiefInput">
            <div className="navHeader">
                <Link to="../warrior/">
                    <h2>Warrior</h2>
                </Link>
                {/* <Link to="../thief/"> */}
                <h1>Thief</h1>
                {/* </Link> */}
                <Link to="../mage/">
                    <h2>Mage</h2>
                </Link>
            </div>
            <OneSkill
                skill={skills.alchemy}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.lightarmor}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.lockpicking}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.pickpocket}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.sneak}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.speech}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <div className="spacer_end"></div>

        </div>
    )
}

export default ThiefSliders