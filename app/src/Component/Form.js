import { useState } from "react";

function Form() {
    const [input, setInput] = useState({})

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input);
    }

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setInput(
            (pre) => {
                return { ...pre, { name }: value
            }
            }
        )
}
return (
    <>
        <form onSubmit={handleSubmit}>

            <label>Name: <input type="text" name="name" onChange={handleChange} /></label> <br />
            <label>Age: <input type="text" name="age" onChange={handleChange} /></label> <br />
            <label>Email: <input type="email" name="email" onChange={handleChange} /></label> <br />
            <input type="submit" />
        </form>
    </>
)
}
export default Form;