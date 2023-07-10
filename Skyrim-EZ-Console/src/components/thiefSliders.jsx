import OneSkill from "./oneSkill";
import { Link, Route, Routes, Navigate } from "react-router-dom";



const ThiefSliders = props => {
    const skills = props.skills;
    const handleOnUpdateSkill = props.handleOnUpdateSkill;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    const perksOutput = props.perksOutput;

    // console.log(skills)

    return (
        <div className="thiefInput unselectable">
            <div className="navHeader">
                <Link to="/mage">
                    <h2>Mage</h2>
                </Link>
                <Link to="/warrior">
                    <h2>Warrior</h2>
                </Link>
                {/* <Link to="/thief"> */}
                <h1>Thief</h1>
                {/* </Link> */}
            </div>
            <OneSkill
                skill={skills.alchemy}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.lightarmor}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.lockpicking}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.pickpocket}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.sneak}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.speech}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
                perksOutput={perksOutput}
            >
            </OneSkill>
            <div className="spacer_end"></div>

        </div>
    )
}

export default ThiefSliders