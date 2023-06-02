import { useState } from "react"

const ShowPerks = (props) => {
    const [showPerks, setShowPerks] = useState(false)
    const allPerks = props.perks
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput

    return (
        <div onMouseEnter={() => setShowPerks(true)} onMouseLeave={() => setShowPerks(false)}>
            <p>
                Mouse Over To Show Perks
            </p>

            {/* Perks Box */}
            <div style={showPerks ? { backgroundColor: "" } : { display: "none" }}>
                {Object.keys(allPerks).map((onePerk) => {
                    const rankedPerksArr = []
                    if ("rank" in allPerks[onePerk]) {
                        for (let key in allPerks[onePerk].rank) {
                            rankedPerksArr.push(allPerks[onePerk].rank[key])
                        }
                    }
                    return (
                        <div>
                            <p style={{ textAlign: "left" }}>
                                <h2>
                                    {onePerk}:
                                </h2>
                                <div style={{ border: "2px solid white" }}>
                                </div>

                                {rankedPerksArr.map((val) => {
                                    return (
                                        <div>
                                            <p>{val.description}</p>
                                            <button type="button" onClick={() => { handleOnSetPerksOutput(val) }}>
                                                ID: {val.ID}
                                            </button>
                                        </div>
                                    )
                                })}

                                {allPerks[onePerk].description && <p>{allPerks[onePerk].description}</p>}
                                {
                                    allPerks[onePerk].ID &&
                                    <button type="button" onClick={() => { handleOnSetPerksOutput(allPerks[onePerk]) }}>
                                        ID: {allPerks[onePerk].ID}
                                    </button>
                                }
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowPerks