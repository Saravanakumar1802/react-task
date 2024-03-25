import React from 'react'
import { useState } from 'react';

const ElementTransfer = () => {
    const [bucket1, setBucket1] = useState([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
    ]);
    const [bucket2, setBucket2] = useState([]);

    // Function to handle adding elements from Bucket 1 to Bucket 2
    const addToBucket2 = () => {
        const selectedElements = bucket1.filter(
            (_, index) => selectedBucket1[index]
        );
        console.log(selectedBucket1, 'selectedBucket1');
        console.log(selectedElements);
        setBucket2((prevBucket2) => [...prevBucket2, ...selectedElements]);
        setBucket1((prevBucket1) =>
            prevBucket1.filter((data, index) => !selectedBucket1[index])
        );
        setSelectedBucket1(Array(bucket1.length).fill(false));
    };

    // Function to handle removing elements from Bucket 2 and moving them back to Bucket 1
    const removeFromBucket2 = () => {
        const selectedElements = bucket2.filter(
            (_, index) => selectedBucket2[index]
        );
        setBucket1((prevBucket1) => [...prevBucket1, ...selectedElements]);
        setBucket2((prevBucket2) =>
            prevBucket2.filter((_, index) => !selectedBucket2[index])
        );
        setSelectedBucket2(Array(bucket2.length).fill(false));
    };

    // Function to add all elements from Bucket 1 to Bucket 2
    const addAllToBucket2 = () => {
        setBucket2((prevBucket2) => [...prevBucket2, ...bucket1]);
        setBucket1([]);
        setSelectedBucket1(Array(bucket1.length).fill(false));
    };

    // Function to remove all elements from Bucket 2 and move them back to Bucket 1
    const removeAllFromBucket2 = () => {
        setBucket1((prevBucket1) => [...prevBucket1, ...bucket2]);
        setBucket2([]);
        setSelectedBucket2(Array(bucket2.length).fill(false));
    };

    // State to track selected elements in each bucket
    const [selectedBucket1, setSelectedBucket1] = useState(
        Array(bucket1.length).fill(false)
    );
    const [selectedBucket2, setSelectedBucket2] = useState(
        Array(bucket2.length).fill(false)
    );

    // Function to toggle the selected state of an element in Bucket 1
    const toggleSelectedBucket1 = (index) => {
        setSelectedBucket1((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    // Function to toggle the selected state of an element in Bucket 2
    const toggleSelectedBucket2 = (index) => {
        setSelectedBucket2((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <>
            <h1>Element Transfer</h1>
            <div className="element-transfer">
                <div className="bucket">
                    <h2>Bucket 1</h2>
                    <ul>
                        {bucket1.map((element, index) => (
                            <li
                                key={index}
                                onClick={() => toggleSelectedBucket1(index)}
                                className={selectedBucket1[index] ? "selected" : ""}
                            >
                                {element}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="controls">
                    <button onClick={addToBucket2}>Add</button>
                    <button onClick={removeFromBucket2}>Remove </button>
                    <button onClick={addAllToBucket2}>Add All </button>
                    <button onClick={removeAllFromBucket2}>Remove All </button>
                </div>
                <div className="bucket">
                    <h2>Bucket 2</h2>
                    <ul>
                        {bucket2.map((element, index) => (
                            <li
                                key={index}
                                onClick={() => toggleSelectedBucket2(index)}
                                className={selectedBucket2[index] ? "selected" : ""}
                            >
                                {element}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ElementTransfer