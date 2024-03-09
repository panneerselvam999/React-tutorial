import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    console.log("current State : ", name)
    function oChange(e) {
        setName(
            e.target.value
        )
    }
    return (
        <>
            <form action="">
                {/* <label htmlFor="">Enter your name: <input type="text" onChange={(e) => { setName(e.target.value) }} /></label> */}
                <label htmlFor="">Enter your name: <input type="text" onChange={oChange} /></label>
            </form>
        </>
    )
}
export default Form;