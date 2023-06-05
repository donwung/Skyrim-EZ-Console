import { useState } from "react";

const Output = (props) => {
    const { skills } = props;
    const [selectedSkills, setSelectedSkills] = useState([])
    // console.log(skills)


    let selectedArr = [];
    for (const one in skills) {
        if (skills[one].selected) {
            console.log(one + " is selected")
            // setSelectedSkills(skills[one])
            console.log(skills[one])
            selectedArr.push(skills[one])
        }
    }

    return (
        <div>
            <h3>Skill Output</h3>
            {/* TODO: print all keyvals */}
            {/* <p>{JSON.stringify(skills)}</p> */}
            {selectedArr.map((one) => {
                return (
                    <div>
                        player.setav {one.technicalName} {one.level}
                    </div>
                )
            })}


        </div>
    )
}

export default Output;