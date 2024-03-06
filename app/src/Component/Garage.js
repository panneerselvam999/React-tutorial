import Car from "./Car";
import Apple from "./Apple";


// const bmw = "BMW"
const CarInfo = { brand: "BMW", color: "Red" }
// const CarInfo = {}
const carList = [
    { brand: "Tesla", color: "black" },
    { brand: "Audi", color: "White" },
    { brand: "WW", color: "Red" },
    { brand: "BMW", color: "Green" }
]

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const CarInfoVal = CarInfo.brand !== undefined && CarInfo.color !== undefined
const AppleInfo = { type: "Mobile", color: "Silver" }
const door = false;
function Garage() {
    return (
        <div>
            <h1>This is Garage Component</h1>
            {CarInfoVal ? <Car CarInfo={CarInfo} /> : null}
            <Apple AInfo={AppleInfo} />
            {door ? <p>Door is Open</p> : <p>Door is Close</p>}
            <ul>
                {carList.map((obj) => < li key={obj.brand}> <Car CarInfo={obj} /> </li>)}
            </ul>

            <ul>
                {numberList.map((ele, index) => <p key={index}>{ele}</p>)}
            </ul>
            {/* <ul>
                {numberList.map((ele) => (
                    <p key={ele}>{ele}</p>
                ))}
            </ul> */}

        </div >
    )
}
export default Garage;