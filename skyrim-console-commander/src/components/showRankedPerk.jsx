import { useState } from "react"

const ShowRankedPerk = props => {
    const perk = props.perk
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    const [selectedPerkRank, setSelectedPerkRank] = useState(1)
    // NOTE: perks must be referred to by their rank
    // console.log(perk)
    // console.log(perk.rank[1])
    // console.log(Object.keys(perk.rank))
    const ranks = Object.keys(perk.rank);
    return (
        <div style={{ marginBottom: "50px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h3>
                    {perk.rank[1].name.slice(0, -2)}
                </h3>
                <button onClick={() => handleOnSetPerksOutput(perk.rank[selectedPerkRank])}>
                    Add this
                </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                    type="range"
                    min="1" max={ranks.length}
                    value={selectedPerkRank}
                    onChange={(e) => setSelectedPerkRank(e.target.value)}></input>
                <p>{selectedPerkRank}</p>
            </div>
            <p>
                {perk.rank[selectedPerkRank].description}
            </p>
        </div>
    )
}

export default ShowRankedPerk