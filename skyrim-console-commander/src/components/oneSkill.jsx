const OneSkill = (props) => {
    const skill = props.skill
    const handleOnCheckedSkill = props.handleOnCheckedSkill
    const handleOnSkillChange = props.handleOnSkillChange

    return (
        <div style={{ color: skill.selected ? "green" : "grey" }}>
            <input
                type="checkbox"
                name={skill.name.replace(/\s/g, '').toLowerCase()}
                onChange={(e) => { handleOnCheckedSkill(e.target.name) }}
            ></input>
            <label>{skill.name}</label>
            <input
                type="number"
                name={skill.name.replace(/\s/g, '').toLowerCase()}
                onChange={(e) => skill.selected && handleOnSkillChange(e)}
                value={skill.selected ? skill.level : 0}
            ></input>
        </div>
    )
}

export default OneSkill;