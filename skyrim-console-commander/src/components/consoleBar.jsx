import { useState } from "react";
import selectRune from "../assets/selectRune.png";
import SkillOutput from '../components/skillOutput'
import PerkOutput from '../components/perkOutput'

const ConsoleBar = props => {
    const skills = props.skills;
    const perksOutput = props.perksOutput;

    const [openConsole, setOpenConsole] = useState(false)
    const [peek, setPeek] = useState(false)

    return (
        <div>
            <div
                className={"consoleWrapper"}
                onClick={() => setOpenConsole(!openConsole)}
            // onClick={() => setOpenConsole(!openConsole)}
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