import OneSkill from "./oneSkill";

const WarriorSliders = props => {
    const skills = props.skills;
    const handleOnUpdateSkill = props.handleOnUpdateSkill;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    console.log(skills)

    return (
        <div>
            <h2>Warrior Skills</h2>
            <OneSkill
                skill={skills.archery}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.block}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.heavyarmor}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.onehanded}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.smithing}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
            <OneSkill
                skill={skills.twohanded}
                handleOnUpdateSkill={handleOnUpdateSkill}
                handleOnSetPerksOutput={handleOnSetPerksOutput}
            >
            </OneSkill>
        </div>
    )
}

export default WarriorSliders