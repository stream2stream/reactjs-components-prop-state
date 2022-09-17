import React, { useState } from 'react'

function getTheTime()
{
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return currentTime;
}

export default function ContainerFcWLambdas(){
    const [containerState, setContainerState] = useState([]);

    const addToList = name => {
        const update = [...containerState, name];
        setContainerState(update);
    }

    const updateNameList = () =>{
        console.log("updateNameList()")
        return containerState.map((item, index) =>
                    <li key={index}>{item}</li>);
    }

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

    return (
        <>
            <div onClick={e => addToList(getTheTime())}>
                <h2>[fcwl] Click Me</h2>
            </div>
            <ul>{updateNameList()}</ul>
        </>
    )
}


