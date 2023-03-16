import { useState } from "react";

const Output = (props) => {
    const { skills } = props;


    return (
        <div>
            <h3>Output</h3>
            {/* TODO: print all keyvals */}

            {Object.keys(skills).map((skillName) => {
                return (
                    <p>player.setav {skillName} {skills[skillName]}</p>
                )
            })}
        </div>
    )
}

export default Output;