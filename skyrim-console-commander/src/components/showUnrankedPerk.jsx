const ShowUnrankedPerk = props => {
    const perk = props.perk;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput;


    // TODO: add and combine deselect button
    const handleOnAddPerkButton = (perk) => {
        handleOnSetPerksOutput(perk)
    }

    return (
        <div className="onePerk">
            <div className="onePerkHeader">
                <h3>
                    {perk.name}
                </h3>
                <button onClick={() => handleOnAddPerkButton(perk)}>
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