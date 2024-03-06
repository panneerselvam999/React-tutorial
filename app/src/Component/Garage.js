import Car from "./Car";
import Apple from "./Apple";


// const bmw = "BMW"
const CarInfo = { brand: "BMW", color: "Red" }
const AppleInfo = { type: "Mobile", color: "Silver" }

function Garage() {
    return (
        <div>
            <h1>This is Garage Component</h1>
            {/* <Car brand={bmw} color="Black" /> */}
            <Car CarInfoBMW={CarInfo} />
            <Apple AInfo={AppleInfo} />
        </div>
    )
}
export default Garage;