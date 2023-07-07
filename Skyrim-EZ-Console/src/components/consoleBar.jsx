import { useState, useEffect } from "react";
import selectRune from "../assets/selectRune.png";
import SkillOutput from '../components/skillOutput'
import PerkOutput from '../components/perkOutput'

const ConsoleBar = props => {
    const skills = props.skills;
    const perksOutput = props.perksOutput;
    const handleOnRemoveFromPerksOutput = props.handleOnRemoveFromPerksOutput;

    const [openConsole, setOpenConsole] = useState(false)
    const [peek, setPeek] = useState(false)
    const [keyDown, setKeyDown] = useState()


    const handleOpenConsole = () => {
        // console.log("opening console")
        // console.log(openConsole)
        setOpenConsole(!openConsole)
    }

    useEffect(() => {
        function handleKeyDown(e) {
            // console.log(e.key);
            if (e.key === "`") {
                handleOpenConsole(!openConsole)
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [openConsole]);


    // TODO: add copy to clipboard feature
    const handleOnCopyToClipboard = () => {
        // navigator.clipboard.writeText(this.state.textToCopy)
        const text = document.getElementById('consoleCommandsOutput')

        console.log(text.textContent)
    }

    return (
        <div>
            <div
                className={"consoleWrapper"}
                onMouseEnter={() => setPeek(true)}
                onMouseLeave={() => setPeek(false)}
            >
                {/* <button></button> */}
                <div className="selectRuneTopBorder">
                    <div className="selectRuneBar"></div>
                    <img
                        src={selectRune}
                        onClick={() => handleOpenConsole()}
                        onMouseEnter={() => setPeek(true)}
                        onMouseLeave={() => setPeek(false)}
                        // style={{ display: openConsole && "none" }}
                        className={"consoleThumb "}>
                    </img>
                    <div className="selectRuneBar"></div>
                </div>
                <div
                    id="consoleCommandsOutput"
                    className={"consoleWindow " + (openConsole ? "opened " : "closed " + (peek && "peek"))}>
                    <h3>
                        <span onClick={() => handleOnCopyToClipboard()}>Copy</span> and paste these
                    </h3>
                    <SkillOutput skills={skills}></SkillOutput>
                    <PerkOutput perks={perksOutput} handleOnRemoveFromPerksOutput={handleOnRemoveFromPerksOutput}></PerkOutput>
                </div>
            </div>
        </div>
    )
}

export default ConsoleBar;