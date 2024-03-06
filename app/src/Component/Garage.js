import Car from "./Car";


// const bmw = "BMW"
const CarInfo = { brand: "BMW", color: "Red" }

function Garage() {
    return (
        <div>
            <h1>This is Garage Component</h1>
            {/* <Car brand={bmw} color="Black" /> */}
            <Car CarInfoBMW={CarInfo} />
        </div>
    )
}
export default Garage;