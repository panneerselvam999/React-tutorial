import Car from "./Car";
import Apple from "./Apple";


// const bmw = "BMW"
const CarInfo = { brand: "BMW", color: "Red" }
// const CarInfo = {}
const CarInfoVal = CarInfo.brand !== undefined && CarInfo.color !== undefined
const AppleInfo = { type: "Mobile", color: "Silver" }
const door = false;
function Garage() {
    return (
        <div>
            <h1>This is Garage Component</h1>
            {CarInfoVal ? <Car CarInfoBMW={CarInfo} /> : null}
            <Apple AInfo={AppleInfo} />
            {door ? <p>Door is Open</p> : <p>Door is Close</p>}

        </div>
    )
}
export default Garage;