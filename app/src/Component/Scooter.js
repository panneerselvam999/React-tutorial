import { useState } from "react"

function Scooter() {
    const [scooter, setScooter] = useState(
        {
            color: "Green",
            brand: "Honda",
            model: "Activa 6g",
            year: "2024"
        }
    )

    function change() {
        // setScooter({ color: "black" })
        setScooter((perviosVal) => {
            return { ...perviosVal, color: "yellow" }
        })
    }
    // console.log(scooter);

    return (
        <>
            <h3>Scooter</h3>
            <p>Color: {scooter.color}</p>
            <p>Brand: {scooter.brand}</p>
            <p>model: {scooter.model}</p>
            <p>Year : {scooter.year}</p>
            <button onClick={change}>Change Scooter</button>
        </>

    )
}
export default Scooter