import React from "react"


class Apple extends React.Component {
    render() {
        const { AInfo } = this.props
        const { type, color } = AInfo
        return (
            <div>
                <h3>Apple type is {type}, and color is {color}</h3>
            </div>
        )
    }
}

export default Apple;


