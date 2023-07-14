import { useState } from "react"


const Credits = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div style={{ position: "absolute", textAlign: "left", height: "0px", top: "40px", margin: "10px", zIndex: "98" }}>
            <p
                onClick={() => { setIsVisible(!isVisible) }}
                className="clickable unselectable"
            >
                Credits:
            </p>
            <div
                style={isVisible ? { visibility: "visible", textAlign: "left", backgroundColor: "black", padding: "5px" } : { visibility: "hidden", height: "0px", width: "0px" }}
            >
                <p>
                    UESP for skill tree icons and perk information
                    <br></br>
                    u/jesuspunk for the nebula background(s)
                    <br></br>
                    Bethesda for a timeless game
                </p>
            </div>
        </div>
    )
}

export default Credits