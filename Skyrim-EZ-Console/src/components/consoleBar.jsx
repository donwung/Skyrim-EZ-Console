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
    const [showClipboardAlert, setShowClipboardAlert] = useState(false)

    const handleOpenConsole = () => {
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
        // get element by id,
        // get textcontent from element,
        // replace textcontent with newline for each parenthesis
        const text = document.getElementById('consoleCommandsOutput').textContent.replace(/\([^()]*\)/g, '\r\n')

        navigator.clipboard.writeText(text)
    }

    const handleShowClipboardAlert = () => {
        setShowClipboardAlert(true)

        setTimeout(() => {
            setShowClipboardAlert(false)
        }, 1500)
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
                <div className={"consoleWindow " + (openConsole ? "opened " : "closed " + (peek && "peek"))}>
                    <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                        <h3 style={{ fontSize: "18pt" }}>
                            <span
                                onClick=
                                {() => { handleOnCopyToClipboard(); handleShowClipboardAlert() }}
                                className="clickable"
                            >
                                Copy to Clipboard</span>
                        </h3>
                        <h3 className={showClipboardAlert ? "consoleClipboardAlert-visible" : "consoleClipboardAlert-hidden"}>
                            Copied!
                        </h3>
                    </div>
                    <div id="consoleCommandsOutput">
                        <SkillOutput skills={skills}></SkillOutput>
                        <PerkOutput perks={perksOutput} handleOnRemoveFromPerksOutput={handleOnRemoveFromPerksOutput}></PerkOutput>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsoleBar;