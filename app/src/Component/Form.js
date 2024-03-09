import { useState } from "react";

function Form() {
    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [email, setEmail] = useState("");

    const [input, setInput] = useState({})


    function handleSubmit(e) {
        e.preventDefault()
        console.log("form submit successfully")
        // console.log("current State : ", name, age, email)
        console.log(input);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Name: <input type="text" onChange={(e) => { setInput(e.target.value) }} /></label> <br />

                <label>Age: <input type="text" onChange={(e) => { setInput(e.target.value) }} /></label> <br />

                <label>Email: <input type="email" onChange={(e) => { setInput(e.target.value) }} /></label> <br />


                {/* <label>Name: <input type="text" onChange={(e) => { setName(e.target.value) }} /></label> <br />

                <label>Age: <input type="text" onChange={(e) => { setAge(e.target.value) }} /></label> <br />

                <label>Email: <input type="email" onChange={(e) => { setEmail(e.target.value) }} /></label> <br /> */}

                <input type="submit" />
            </form>
        </>
    )
}
export default Form;