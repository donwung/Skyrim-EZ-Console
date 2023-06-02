const PerkOutput = (props) => {
    const output = props.perks
    console.log(output)

    return (
        <div>
            <h3>
                Perks output
            </h3>
            {/* {output} */}
            {
                output.map((one) => {
                    return (
                        <div>
                            player.addperk {one.ID} <span className="unselectable" style={{ color: "grey" }}>({one.name})</ span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PerkOutput