

function Car(props) {
    const { CarInfo } = props
    const { brand, color } = CarInfo

    return (
        <div>
            <h3>Car brand is {brand} color is {color}</h3>
        </div>
    )
}

export default Car