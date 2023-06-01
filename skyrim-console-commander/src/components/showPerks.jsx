import { useState } from "react"

const ShowPerks = (props) => {
    const [showPerks, setShowPerks] = useState(false)
    const allPerks = props.perks


    return (
        <div>
            <p onClick={() => setShowPerks(!showPerks)}>
                Show Perks
            </p>
            <div style={showPerks ? { backgroundColor: "green" } : { display: "none" }}>
                {/* {showPerks(skill.perks)} */}
                {/* BUG: cannot print out multilevel perks */}
                {/* TODO: style buttons to look "normal" */}
                {/* TODO: make buttons add to skyrim console output */}
                {/* TODO: move perks to another component */}
                {Object.keys(allPerks).map((onePerk) => {
                    const rankedPerksArr = []
                    // console.log(onePerk)
                    if ("rank" in allPerks[onePerk]) {
                        // console.log("haggling perk")
                        // console.log(allPerks[onePerk])
                        for (let key in allPerks[onePerk].rank) {
                            rankedPerksArr.push(allPerks[onePerk].rank[key])
                            // console.log(key)
                            // console.log(allPerks[onePerk].rank[key].description)
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
                                {allPerks[onePerk].description && <p>{allPerks[onePerk].description}</p>}
                                {rankedPerksArr.map((val) => {
                                    return (
                                        <div>
                                            <p>{val.description}</p>
                                            <button type="button" onClick={() => { console.log(val.ID) }}>
                                                ID: {val.ID}
                                            </button>
                                        </div>
                                    )
                                })}
                                {
                                    allPerks[onePerk].ID &&
                                    <button type="button" onClick={() => { console.log(allPerks[onePerk].ID) }}>
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