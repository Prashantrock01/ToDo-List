import React, { useState, useEffect } from "react";
import {FcfullTrash} from "react-icons/fc";
//import { FcDownload } from "react-icons/fc";
import { FaPenciAlt } from "react-icons/fa";
import "./style.css";

//Get items in local stroage.
const getItems =() => {
    let list = localStroage.getItem("lists");
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
            <h1 className="h1"> ToDo List </h1>
            <input
            type="text"
            value={inputList}
            placeholder="Add Your Items"
            onChange={inputItems}
            />
            <button onClick={itemSubmit}> + </button>
            {/* Display empty array using map method */}
            { items.map((itemsValue, index) => {
                return (
                    <div className="map" key={index}>
                        <textArea className="fl w-20" type="text" value={inputList}> {itemsValue}
                        </textArea>
                        <div className="mapButton">
                            <i onClick={() => textDelete(index)}>
                                <FcfullTrash />
                            </i>
                            {/* <i onClick = { textDownload}>
                            <FcDownload />
                </i> */ }
                <i onClick={textEdit}>
                    <FaPenciAlt/>
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