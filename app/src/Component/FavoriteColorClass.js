import React from "react";

class Fcc extends React.Component {

    constructor() {
        super();
        this.state = { color: "Yellow" }
    }

    render() {
        return (
            <>
                <p>(FCC)  my favorite color is {this.state.color}</p>
                <button onClick={() => { this.setState({ color: "Green" }) }}>Change Color</button>
            </>
        )
    }
}

export default Fcc;

