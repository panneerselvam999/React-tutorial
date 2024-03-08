// import myCss from "./css/Header.css"
import "./css/Header.css"
import MyCss from "./css/Header.module.css"

function Header() {

    const myStyle = {
        color: "red",
        backgroundColor: "lightblue",
        fontFamily: "Sans-Serif",
        padding: "10px"
    }

    return (
        <div>
            {/* <h4 style={{ color: "red", backgroundColor: "Blue" }}>Hollo Style</h4> */}
            {/* <h4>Hollo Style</h4> */}
            <h4 style={myStyle}>Hollo Style</h4>
            <p className={MyCss.bigBlue}> Panneer</p>
            <p>Add a little Style</p>
        </div>
    )
}

export default Header;