const ShowUnrankedPerk = props => {
    const perk = props.perk;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput;
    console.log(perk)

    return (
        <div className="onePerk">
            <div className="onePerkHeader">
                <h3>
                    {perk.name}
                </h3>
                <button onClick={() => handleOnSetPerksOutput(perk)}>
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