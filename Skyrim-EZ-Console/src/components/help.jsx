import { useState } from "react"


const Help = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div style={{ position: "absolute" }}>
            <p
                onClick={() => { setIsVisible(!isVisible); console.log(isVisible) }}
            >
                help
            </p>
            <div style={isVisible ? { visibility: "visible", textAlign: "left", backgroundColor: "black", zIndex: "4" } : { visibility: "hidden", height: "0px", width: "0px" }}>
                <p>
                    This is how to use SkyrimEZConsole:
                </p>
                <p>
                    First, install ConsolePlusPlus using your favorite mod loader.
                    <br></br>
                    Then open this application (at https://donwung.github.io/Skyrim-EZ-Console/)
                    <br></br>
                    Set your stats
                    <br></br>
                    Copy the commands
                    <br></br>
                    Then paste them into ConsolePlusPlus using Ctrl+V
                </p>
            </div>
        </div>
    )
}

export default Help