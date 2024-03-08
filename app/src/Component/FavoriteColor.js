import { useState } from "react";

function FavoriteColor() {

    // let Color = "black";
    const [Color, SetColor] = useState("Yellow")
    return (
        <>
            <p>My Favorite Color is {Color}</p>
            <button onClick={() => { SetColor("Green") }}>Change Color</button>
        </>
    )
}

export default FavoriteColor;