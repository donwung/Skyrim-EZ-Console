import OneSkill from "./oneSkill";
import { Link, Route, Routes, Navigate } from "react-router-dom";


const WarriorSliders = props => {
    const path = props.path;
    const skills = props.skills;
    const handleOnUpdateSkill = props.handleOnUpdateSkill;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    const perksOutput = props.perksOutput;

    // console.log(skills)

    return (
        <div className="warriorInput unselectable">
            <div className="navHeader">
                <Link to="/mage">
                    <h2>Mage</h2>
                </Link>
                {/* <Link to="/warrior"> */}
                <h1>Warrior</h1>
                {/* </Link> */}
                <Link to="/thief">
                    <h2>Thief</h2>
                </Link>
            </div>
            <OneSkill
                skill={skills.archery}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.block}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.heavyarmor}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.onehanded}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.smithing}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.twohanded}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <div className="spacer_end"></div>

        </div>
    )
}

export default WarriorSliders