import { useEffect, useState } from "react";

const ShowUnrankedPerk = props => {
    const perk = props.perk;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput;
    const perksOutput = props.perksOutput
    const [perkIsSelected, setPerkIsSelected] = useState(false)

    // TODO: add and combine deselect button
    const handleOnAddPerkButton = (perk) => {
        handleOnSetPerksOutput(perk)
        debug_handleOnCheckIsSelected()
    }

    useEffect(()=>{
        debug_handleOnCheckIsSelected()
    }, [perkIsSelected])

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
        <div className="onePerk">
            <div className="onePerkHeader">
                <h3>
                    {perk.name}
                </h3>
                <button
                    onClick={() => { handleOnAddPerkButton(perk); debug_handleOnCheckIsSelected()
                    }}
                    className={perkIsSelected && "perkIsSelected"}
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