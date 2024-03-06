import Car from "./Car";
import Apple from "./Apple";


// const bmw = "BMW"
// const CarInfo = { brand: "BMW", color: "Red" }
const CarInfo = {}
const AppleInfo = { type: "Mobile", color: "Silver" }

function Garage() {
    return (
        <div>
            <h1>This is Garage Component</h1>
            {CarInfo.brand !== undefined && CarInfo.color !== undefined ?
                <Car CarInfoBMW={CarInfo} /> : null}
            <Apple AInfo={AppleInfo} />
        </div>
    )
}
export default Garage;