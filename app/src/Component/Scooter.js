import { useState } from "react"

function Scooter() {
    const [color, setColor] = useState("Green")
    const [brand, setBrand] = useState("Honda")
    const [model, setModel] = useState("Activa 6G")
    const [year, setYear] = useState("2024")


    return (
        <>
            <h3>Scooter</h3>
            <p>Color {color}</p>
            <p>Brand {brand}</p>
            <p>model {model}</p>
            <p>Year {year}</p>
        </>

    )
}
export default Scooter