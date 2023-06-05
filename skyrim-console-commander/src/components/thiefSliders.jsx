import OneSkill from "./oneSkill";

const ThiefSliders = props => {
    const skills = props.skills;
    const handleOnUpdateSkill = props.handleOnUpdateSkill;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    console.log(skills)

    return (
        <div>
            <h2>Thief Skills</h2>
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
        </div>
    )
}

export default ThiefSliders