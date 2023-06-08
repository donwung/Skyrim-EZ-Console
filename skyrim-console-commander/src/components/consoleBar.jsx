import { useState } from "react";
import selectRune from "../assets/selectRune.png";
import SkillOutput from '../components/skillOutput'
import PerkOutput from '../components/perkOutput'

const ConsoleBar = props => {
    const skills = props.skills;
    const perksOutput = props.perksOutput;

    const [openConsole, setOpenConsole] = useState(false)
    const [peek, setPeek] = useState(false)

    document.addEventListener(("keypress"), (e) => {
        console.log(e.key)
        if (e.key === "`") {
            setOpenConsole(!openConsole)
        }
    })

    return (
        <div>
            <div
                className={"consoleWrapper"}
                onMouseEnter={() => setPeek(true)}
                onMouseLeave={() => setPeek(false)}
            >
                {/* <button></button> */}
                <img
                    src={selectRune}
                    onClick={() => setOpenConsole(!openConsole)}
                    onMouseEnter={() => setPeek(true)}
                    onMouseLeave={() => setPeek(false)}
                    // style={{ display: openConsole && "none" }}
                    className={"consoleThumb "}>
                </img>
                <div className={"consoleWindow " + (openConsole ? "opened " : "closed " + (peek && "peek"))}>
                    <SkillOutput skills={skills}></SkillOutput>
                    <PerkOutput perks={perksOutput}></PerkOutput>
                </div>
            </div>
        </div>
    )
}

export default ConsoleBar;