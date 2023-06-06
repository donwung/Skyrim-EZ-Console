const ShowUnrankedPerk = props => {
    const perk = props.perk;
    const handleOnSetPerksOutput = props.handleOnSetPerksOutput;
    console.log(perk)

    return (
        <div style={{ marginBottom: "50px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h3>
                    {perk.name}
                </h3>
                <button onClick={() => handleOnSetPerksOutput(perk)}>
                    Add this
                </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {/* <input
                    type="range"
                    min="1" max={ranks.length}
                    value={selectedPerkRank}
                    onChange={(e) => setSelectedPerkRank(e.target.value)}></input> */}
            </div>
            <p>
                {perk.description}
            </p>
        </div>
    )
}

export default ShowUnrankedPerk