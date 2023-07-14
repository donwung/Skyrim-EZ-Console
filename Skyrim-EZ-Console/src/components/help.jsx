import { useState } from "react"


const Help = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div style={{ position: "absolute", textAlign: "left", height: "0px", margin: "10px", zIndex: "99" }}>
            <p
                onClick={() => { setIsVisible(!isVisible) }}
                className="clickable unselectable"
            >
                How To Use:
            </p>
            <div
                style={isVisible ? { visibility: "visible", textAlign: "left", backgroundColor: "black", padding: "5px" } : { visibility: "hidden", height: "0px", width: "0px" }}
            >
                <p>
                    This is how to use SkyrimEZConsole:
                </p>
                <p>
                    First, install <a target="_blank" href="https://www.nexusmods.com/skyrimspecialedition/mods/79975">ConsolePlusPlus</a> for Skyrim Special Edition using your favorite mod loader.
                    <br></br>
                    Then open this application (at https://donwung.github.io/Skyrim-EZ-Console/)
                </p>
                <p>
                    To set your skills, click on the skill name to enable changes.
                    <br></br>
                    Then drag the slider as desired.
                </p>
                <p>
                    To set your perks, mouse over the "View Perks" text to open the perks selection menu.
                    <br></br>
                    If the perk has a slider, you can select your desired rank.
                    <br></br>
                    Then you can click the "+" button to add the perk to your list of console commands.
                </p>
                <p>
                    When finished, you can mouse over the bottom part of the window.
                    <br></br>
                    Then click the "console" to enlarge it.
                    <br></br>
                    Here, you can see your skills and perks selected.
                    <br></br>
                    To remove a console command, click the "(remove)" button.
                </p>
                <p>
                    You can then click "Copy to Clipboard" to copy all the commands to your clipboard.
                    <br></br>
                    Then go back into your game, open the Skyrim console using "`" (the key under Esc),
                    <br></br>
                    (alternatively, manually select the text then copy it using Ctrl+C)
                    <br></br>
                    then paste your command using Ctrl+V.
                </p>
                <p>
                    Have fun!
                </p>
            </div>
        </div>
    )
}

export default Help