import { useState } from "react";

function List() {
    // const [list, setList] = useState(["item1", "item2", "item3", "item4"]);
    const [list, setList] = useState([]);
    const [count, setCount] = useState(1)

    function addItem() {
        const itemName = "item" + count;
        setList((perVale) => { return [...perVale, itemName] })
        setCount((preVale) => { return preVale + 1 })
    }
    console.log(list)
    return (
        <>
            <button onClick={addItem}>Add item</button>
            <h3>List items</h3>
            <ul>
                {list.map((ele, index) => (
                    <li key={index}>{ele}</li>
                ))}
            </ul>
        </>
    );
}

export default List;
