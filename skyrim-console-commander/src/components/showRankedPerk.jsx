import { useState } from "react"
import sliderEnd from "../assets/sliderBorder.png"

const ShowRankedPerk = props => {
    const perk = props.perk
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput
    const [selectedPerkRank, setSelectedPerkRank] = useState(1)
    // NOTE: perks must be referred to by their rank
    // console.log(perk.rank[1])
    // console.log(Object.keys(perk.rank))

    // TODO: add and combine deselect button
    const handleOnAddPerkButton = (perk) => {
        handleOnSetPerksOutput(perk)
    }

    const ranks = Object.keys(perk.rank);
    return (
        <div className="onePerk">
            <div className="onePerkHeader">
                <h3>
                    {perk.rank[1].name.slice(0, -2)}
                </h3>
                <button onClick={() => handleOnAddPerkButton(perk.rank[selectedPerkRank])}>
                    {"+"}
                </button>
            </div>
            <div className="onePerkTitleBar"></div>
            <div className="rangeSlider w-65">
                <img src={sliderEnd} className="flipped"></img>
                <input
                    type="range"
                    min="1" max={ranks.length}
                    value={selectedPerkRank}
                    onChange={(e) => setSelectedPerkRank(e.target.value)}></input>
                <img src={sliderEnd} ></img>
            </div>
            <div>
                <p>Rank {selectedPerkRank}</p>
                <p className="onePerkDescription">
                    {perk.rank[selectedPerkRank].description}
                </p>
            </div>
        </div>
    )
}

export default ShowRankedPerk