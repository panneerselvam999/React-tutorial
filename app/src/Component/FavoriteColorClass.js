import React from "react";

class Fcc extends React.Component {

    constructor() {
        super();
        this.state = {
            color: "Yellow",
            fruit: "banana"
        }
    }

    render() {
        return (
            <>
                <p>(CC)  my favorite color is {this.state.color}, fruit is {this.state.fruit}</p>
                {/* <button onClick={() => { this.setState({ color: "Green" }) }}>Change Color</button> */}
                <button onClick={() => {
                    this.setState(
                        (previousVal) => {
                            // return { ...previousVal, fruit: "apple" }
                            return { color: "black", fruit: "apple" }
                        }
                    )
                }}>Change Color</button>
            </>
        )
    }
}

export default Fcc;

