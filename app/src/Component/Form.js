import { useState } from "react";

function Form() {
    const [input, setInput] = useState({ phone: "+91" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input);
    }

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setInput(
            (pre) => {
                return {
                    ...pre, [name]: value
                }
            }
        )
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Name: <input type="text" name="name" onChange={handleChange} /></label> <br />
                <label>Age: <input type="text" name="age" onChange={handleChange} /></label> <br />
                <label>Email: <input type="email" name="email" onChange={handleChange} value={input.mail} /></label> <br />
                <label>Phone: <input type="text" name="phone" onChange={handleChange} value={input.phone} /></label> <br />
                <label>Country : <select name="country" onChange={handleChange} value={input.country}>
                    <option value="select">Select</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Bangadesh">Bandadesh</option>
                </select></label><br />
                <input type="submit" />
            </form>
        </>
    )
}
export default Form;



// import { useState } from "react";

// function Form() {
//     const [input, setInput] = useState({
//         phone: "+91",
//         country: "select", // Set the initial value for "country"
//     });

//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(input);
//     }

//     function handleChange(e) {
//         const name = e.target.name;
//         const value = e.target.value;
//         setInput((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Name: <input type="text" name="name" onChange={handleChange} />
//                 </label>{" "}
//                 <br />
//                 <label>
//                     Age: <input type="text" name="age" onChange={handleChange} />
//                 </label>{" "}
//                 <br />
//                 <label>
//                     Email:{" "}
//                     <input
//                         type="email"
//                         name="email"
//                         onChange={handleChange}
//                         value={input.email}
//                     />
//                 </label>{" "}
//                 <br />
//                 <label>
//                     Phone:{" "}
//                     <input
//                         type="text"
//                         name="phone"
//                         onChange={handleChange}
//                         value={input.phone}
//                     />
//                 </label>{" "}
//                 <br />
//                 <label>
//                     Country :{" "}
//                     <select name="country" onChange={handleChange} value={input.country}>
//                         <option value="select">Select</option>
//                         <option value="India">India</option>
//                         <option value="USA">USA</option>
//                         <option value="Bangadesh">Bangladesh</option>
//                     </select>
//                 </label>
//                 <br />
//                 <input type="submit" />
//             </form>
//         </>
//     );
// }

// export default Form;
