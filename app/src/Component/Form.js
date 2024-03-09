import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    function oChange(e) {
        setName(
            e.target.value
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
            console.log("form submit successfully")
        console.log("current State : ", name)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="">Enter your name: <input type="text" onChange={(e) => { setName(e.target.value) }} /></label> */}
                <label htmlFor="">Enter your name: <input type="text" onChange={oChange} /></label>
                <br />
                <input type="submit" />
            </form>
        </>
    )
}
export default Form;