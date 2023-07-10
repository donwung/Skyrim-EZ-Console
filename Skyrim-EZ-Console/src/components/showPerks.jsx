import { useState } from "react"
import selectRune from "../assets/selectRunePerks.png"
import ShowRankedPerk from "./showRankedPerk"
import ShowUnrankedPerk from "./showUnrankedPerk"

const ShowPerks = (props) => {
    const [showPerks, setShowPerks] = useState(false)
    const allPerks = props.perks
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    const skillName = props.selectedSkill
    const perksOutput = props.perksOutput


    // TODO: change + to x on selected
    const debug_handleOnCheckIsSelected = () => {
        console.log("dbug")

        const IDarr = perksOutput.map((perk) => {
            return perk.ID
        })
        console.log(IDarr)
        console.log(perk.ID)
        if (IDarr.includes(perk.ID)) {
            console.log("found")
            setPerkIsSelected(true)
        } else {
            setPerkIsSelected(false)
        }
    }

    return (
        <div
            style={{ width: "20%", height: "60px" }}
            className="centered"
            onMouseEnter={() => setShowPerks(true)}
            onMouseLeave={() => setShowPerks(false)}>
            {/* <div style={{ backgroundColor: "green", width: "20%" }} onMouseEnter={() => setShowPerks(true)} onMouseLeave={() => setShowPerks(true)}> */}
            <div className="centered">
                <p className={showPerks && "hidden"}>View {skillName} Perks</p>
                <img
                    src={selectRune}
                    className={showPerks ? "showPerksRune" : "hidden"}>
                </img>
            </div>

            {/* Perks Box */}
            <div
                className={"skillBg perksBox " + (showPerks ? "show " : "hidden ")}
                id={skillName.replace(/\s/g, '').toLowerCase()}>
                <div className="spacer"></div>
                {Object.keys(allPerks).map((onePerk) => {
                    if ("rank" in allPerks[onePerk]) {
                        return (
                            <ShowRankedPerk
                                perk={allPerks[onePerk]}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                                perksOutput={perksOutput}
                            ></ShowRankedPerk>)
                    } else {
                        return (
                            <ShowUnrankedPerk
                                perk={allPerks[onePerk]}
                                handleOnSetPerksOutput={handleOnSetPerksOutput}
                                perksOutput={perksOutput}
                            ></ShowUnrankedPerk>)
                    }
                    // return (
                    //     // HACK: this isn't safe 
                    //     // TODO: refactor perk printing
                    //     <div key={onePerk}>
                    //         <div style={{ textAlign: "left" }}>
                    //             <h2 className="perkName">
                    //                 {onePerk}
                    //             </h2>
                    //             <select>
                    //                 {rankedPerksArr.map((val) => {
                    //                     // for if a perk has multiple ranks
                    //                     return (
                    //                         <option key={val.ID}>
                    //                             {/* description */}
                    //                             <p>{Object.keys(val)}</p>
                    //                         </option>
                    //                     )
                    //                 })}
                    //             </select>
                    //             <div style={{ border: "2px solid white" }}></div>

                    //             <div className="perkDescription">
                    //                 {rankedPerksArr.map((val) => {
                    //                     // for if a perk has multiple ranks
                    //                     return (
                    //                         <div key={val.ID}>
                    //                             {/* description */}
                    //                             <p>{val.description}</p>
                    //                             <button type="button" onClick={() => { handleOnSetPerksOutput(val) }}>
                    //                                 {/* ID: {val.ID} */}
                    //                                 Add {val.name}
                    //                             </button>
                    //                         </div>
                    //                     )
                    //                 })}

                    //                 {/* description */}
                    //                 {allPerks[onePerk].description && <p>{allPerks[onePerk].description}</p>}
                    //                 {
                    //                     // for if a perk only has one rank
                    //                     allPerks[onePerk].ID &&
                    //                     <button type="button" onClick={() => { handleOnSetPerksOutput(allPerks[onePerk]) }}>
                    //                         {/* ID: {allPerks[onePerk].ID} */}
                    //                         Add {allPerks[onePerk].name}
                    //                     </button>
                    //                 }
                    //             </div>
                    //         </div>
                    //     </div>
                    // )
                })}
                <div className="spacer_end"></div>
            </div>
        </div>
    )
}

export default ShowPerks