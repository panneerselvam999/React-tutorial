import Car from "./Car";


// const bmw = "BMW"
const CarInfo = { brand: "BMW", color: "Black" }

function Garage() {
    return (
        <div>
            <h1>This is Garage Component</h1>
            {/* <Car brand={bmw} color="Black" /> */}
            <Car CarInfo={CarInfo} />
        </div>
    )
}
export default Garage;