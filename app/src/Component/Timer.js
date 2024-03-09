import { useEffect, useState } from "react"

function Timer() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Render Screen");
        checkCount();
        setTimeout(() => {
            setCount((pre) => { return pre + 1 })
        }, 500);
    })

    function checkCount() {
        if (count > 10) {
            setCount(1)
        }
    }

    function updateCount() {
        setCount((pre) => { return pre + 1 })
    }
    return (
        <>
            <h3>I have render {count} times</h3>
            <button onClick={updateCount} >Increacr Count</button>
        </>
    )
}
export default Timer

