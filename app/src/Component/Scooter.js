import { useState } from "react"

function Scooter() {
    // const [color, setColor] = useState("Green")
    // const [brand, setBrand] = useState("Honda")
    // const [model, setModel] = useState("Activa 6G")
    // const [year, setYear] = useState("2024")

    const [scooter, setScooter] = useState(
        {
            color: "Green",
            brand: "Honda",
            model: "Activa 6g",
            year: "2024"
        }
    )


    return (
        <>
            <h3>Scooter</h3>
            {/* <p>Color {color}</p>
            <p>Brand {brand}</p>
            <p>model {model}</p>
            <p>Year {year}</p> */}
            <p>Color {scooter.color}</p>
            <p>Brand {scooter.brand}</p>
            <p>model {scooter.model}</p>
            <p>Year {scooter.year}</p>
        </>

    )
}
export default Scooter