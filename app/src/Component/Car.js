

function Car(props) {
    const { brand, color } = props

    return (
        <div>
            <h3>Car brand is {brand} color is {color}</h3>
        </div>
    )
}

export default Car