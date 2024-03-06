

function Car(props) {
    const { CarInfoBMW } = props
    const { brand, color } = CarInfoBMW

    return (
        <div>
            <h3>Car brand is {brand} color is {color}</h3>
            <h3>Car brand is {CarInfoBMW.brand} color is {CarInfoBMW.color}</h3>
        </div>
    )
}

export default Car