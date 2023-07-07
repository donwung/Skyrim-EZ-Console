const PerkOutput = (props) => {
    const output = props.perks
    const handleOnRemoveFromPerksOutput = props.handleOnRemoveFromPerksOutput
    // console.log(output)

    return (
        <div>
            {
                output.map((one, key) => {
                    return (
                        <div style={{ display: "flex", gap: "2px", height: "16pt" }} key={key}>
                            <p>player.addperk {one.ID}</p>
                            <p className="unselectable" style={{ color: "grey" }}>({one.name})</p>
                            <p onClick={() => { handleOnRemoveFromPerksOutput(one.ID, key) }}>(remove perk)</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PerkOutput