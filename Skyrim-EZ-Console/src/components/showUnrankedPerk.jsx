import { useEffect, useState } from "react";

const ShowUnrankedPerk = props => {
    const perk = props.perk;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput;
    const perksOutput = props.perksOutput
    const [perkIsSelected, setPerkIsSelected] = useState(false)

    // TODO: add and combine deselect button
    const handleOnAddPerkButton = (perk) => {
        if (debug_handleOnCheckIsSelected()) {
            setPerkIsSelected(false)
            handleOnSetPerksOutput(perk, "remove")
        } else {
            handleOnSetPerksOutput(perk)
        }
    }

    // change button style
    useEffect(() => {
        debug_handleOnCheckIsSelected()
    },
        // FIXME: rerenders *all* perks pages
        [perksOutput]
    )

    const debug_handleOnCheckIsSelected = () => {
        const IDarr = perksOutput.map((perk) => {
            return perk.ID
        })

        if (IDarr.includes(perk.ID)) {
            setPerkIsSelected(true)
            console.log("found")
            return true
        } else {
            setPerkIsSelected(false)
            return false
        }
    }

    return (
        <div className="onePerk">
            <div className="onePerkHeader">
                <h3>
                    {perk.name}
                </h3>
                <button
                    onClick={() => {
                        handleOnAddPerkButton(perk);
                    }}
                    className={perkIsSelected ? "perkIsSelected" : "perkNotSelected"}
                >
                    +
                </button>
            </div>
            <div className="onePerkTitleBar"></div>
            <p className="onePerkDescription">
                {perk.description}
            </p>
        </div>
    )
}

export default ShowUnrankedPerk