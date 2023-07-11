import { useState } from "react";

const Output = (props) => {
    const { skills } = props;
    const handleOnUpdateSkill = props.handleOnUpdateSkill;
    const [selectedSkills, setSelectedSkills] = useState([])
    // console.log(skills)


    let selectedArr = [];
    for (const skill in skills) {
        if (skills[skill].selected) {
            // console.log(skill + " is selected")
            // setSelectedSkills(skills[skill])
            // console.log(skills[skill])
            selectedArr.push(skills[skill])
        }
    }

    return (
        <div>
            {/* <h3>Skill Output</h3> */}
            {/* TODO: print all keyvals */}
            {/* <p>{JSON.stringify(skills)}</p> */}
            {selectedArr.map((skill, key) => {
                return (
                    <div style={{ display: "flex", gap: "2px", height: "16pt" }} key={key}>
                        <p>
                            player.setav {skill.technicalName} {skill.level}
                        </p>
                        <p
                            className="unselectable"
                            style={{ color: "grey" }}>({skill.name})</p>
                        <p
                            className="unselectable clickable"
                            style={{ color: "lightgray" }}
                            onClick={() => { handleOnUpdateSkill(skill, "check") }}>(remove skill)</p>
                            {/* onClick={{}}>(remove skill)</p> */}
                    </div>
                )
            })}


        </div>
    )
}

export default Output;