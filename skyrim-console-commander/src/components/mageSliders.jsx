import OneSkill from "./oneSkill";

const MageSliders = props => {
    const skills = props.skills;
    const handleOnUpdateSkill = props.handleOnUpdateSkill;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    console.log(skills)

    return (
        <div>
            <h2>Mage Skills</h2>
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
        </div>
    )
}

export default MageSliders