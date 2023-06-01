import { useState } from "react";

const Output = (props) => {
    const { skills } = props;


    return (
        <div>
            <h3>Output</h3>
            {/* TODO: print all keyvals */}
            <p>{JSON.stringify(skills)}</p>

            
        </div>
    )
}

export default Output;