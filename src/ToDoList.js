import React, { useState } from "react";
import "./style.css";
const ToDoList = () => {
    const [inputList, setInputList] = useState("");
    const [items,setItems] = useState([]);
    const inputItems = (event) => {
        setInputList(event.target.value);
    };
    const itemSubmit = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };
    return (
        <>
        <div className="container">
            <div className="container2">
                <h1> ToDo List</h1>
                <input 
                type="text"
                value={inputList}
                placeholder="Add Your Items"
                onChange={inputItems} />
                <button onClick={itemSubmit}>+</button>
                {/* Hello brother */}
                {items.map((itemsValue) => {
                    return <li>{itemsValue}</li>;
                })}
            </div>
        </div>
        </>
    );
};
export default ToDoList;