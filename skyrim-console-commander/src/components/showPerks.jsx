import { useState } from "react"

const ShowPerks = (props) => {
    const [showPerks, setShowPerks] = useState(false)
    const allPerks = props.perks
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput

    return (
        // DEBUG: uncomment this for original code
        <div style={{ backgroundColor: "green" }} onMouseEnter={() => setShowPerks(true)} onMouseLeave={() => setShowPerks(false)}>
            {/* <div onMouseEnter={() => setShowPerks(true)} onMouseLeave={() => setShowPerks(true)}> */}
            <p>
                Open Perks {">>"}
            </p>

            {/* Perks Box */}
            <div className={showPerks ? "perksBox_show" : "perksBox_hide"}>
                {Object.keys(allPerks).map((onePerk) => {
                    const rankedPerksArr = []
                    if ("rank" in allPerks[onePerk]) {
                        for (let key in allPerks[onePerk].rank) {
                            rankedPerksArr.push(allPerks[onePerk].rank[key])
                        }
                    }
                    return (
                        // HACK: this isn't safe 
                        // TODO: refactor perk printing
                        <div key={onePerk}>
                            <div style={{ textAlign: "left" }}>
                                <h2>
                                    {onePerk}:
                                </h2>
                                <div style={{ border: "2px solid white" }}>
                                </div>

                                {rankedPerksArr.map((val) => {
                                    return (
                                        <div key={val.ID}>
                                            <p>{val.description}</p>
                                            <button type="button" onClick={() => { handleOnSetPerksOutput(val) }}>
                                                {/* ID: {val.ID} */}
                                                Add {val.name}
                                            </button>
                                        </div>
                                    )
                                })}

                                {allPerks[onePerk].description && <p>{allPerks[onePerk].description}</p>}
                                {
                                    allPerks[onePerk].ID &&
                                    <button type="button" onClick={() => { handleOnSetPerksOutput(allPerks[onePerk]) }}>
                                        {/* ID: {allPerks[onePerk].ID} */}
                                        Add {allPerks[onePerk].name}
                                    </button>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowPerks