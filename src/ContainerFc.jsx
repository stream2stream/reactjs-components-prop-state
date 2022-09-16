import React, { useState } from 'react'
import { useEffect } from 'react';

function getTheTime()
{
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return currentTime;
}

export default function ContainerFc(){
    const message = "Value: ";
    const [containerState, setContainerState] = useState([]);
    const addToList = name => {
        const update = [...containerState, name];
        setContainerState(update);
    }
    // Everytime a state field is modified with a value that is not the same
    // as the current value, this function is re-executed

    // Observe the output in the browser console
    console.log("Here I am...");
    // It's printed twice because <React.StrictMode> has been enabled 
    // in index.js
    // <React.StrictMode> https://reactjs.org/docs/strict-mode.html
    /*
     * Basically StrictMode is a tool for highlighting potential problems 
     * in an application. Like Fragment, StrictMode does not render any 
     * visible UI. It activates additional checks and warnings for its 
     * descendants.
     * 
     * Strict mode checks are run in development mode only; they do not 
     * impact the production build.
     */

    const nameList = containerState.map((item, index) =>
                                        <li key={index}>{item}</li>);

    return (
        <>
            <div onClick={e => addToList("YYY")}>
                <h2>[fc] Click Me</h2>
            </div>
            <ul>{nameList}</ul>
        </>
    )
}


