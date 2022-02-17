import React, { useState, useEffect } from "react";
import {FcfullTrash} from "react-icons/fc";
//import { FcDownload } from "react-icons/fc";
import { FaPencilAlt } from "react-icons/fa";
import "./style.css";

//Get items in local stroage.
const getItems =() => {
    let list = localStorage.getItem("lists");
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem("lists"));
    }
    else{
        return [];
    }
};
const ToDoList = () => {
    const [inputList, setInputList] = useState("");
    const [items,setItems] = useState(getItems());
    const inputItems = (event) => {
        setInputList(event.target.value);
    };
    // List save in local storage
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items));
    },[items]);
    // Submit function
    const itemSubmit = () => {
        if (!inputList) {
        } else {
            setItems([...items, inputList]);
            setInputList("");
        }
    };
    // Text delete function
    const textDelete = (id) => {
        const updatedText = items.filter((elem, ind) => {
            return ind !== id;
        });
        setItems(updatedText);
    };
    // Text edit function
    const textEdit = () => {};
    return (
        <>
        <div className="container">
            <div className="tc ma3">
            <h1 className="h1 mb5 dim"> ToDo List </h1>
            <input
            className=""
            type="text"
            value={inputList}
            placeholder="Add Your Items"
            onChange={inputItems}
            />
            <button className="ma2" onClick={itemSubmit}> + </button>
            </div>
            {/* Display empty array using map method */}
            { items.map((itemsValue, index) => {
                return (
                    <div className="map fl w-20 pa2" key={index}>
                        <textArea className="bg-lightest-blue" type="text" value={inputList}> {itemsValue}
                        </textArea>
                        <div className="mapButton">
                            <i onClick={() => textDelete(index)}>
                                <FcfullTrash />
                            </i>
                            {/* <i onClick = { textDownload}>
                            <FcDownload />
                </i> */ }
                <i onClick={textEdit}>
                    <FaPencilAlt/>
                </i>
                        </div>
                        </div>
                );
            })}
        </div>
        </>
    );
};
export default ToDoList;