import Car from "./Car";


const bmw = "BMW"
// const bmwInfo = { brand: "BMW", color: "Black" }

function Garage() {
    return (
        <div>
            <h1>This is Garage Component</h1>
            <Car brand={bmw} color="Black" />
            {/* <Car carInfo={bmwInfo} /> */}
        </div>
    )
}
export default Garage;