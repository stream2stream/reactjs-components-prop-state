import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

function getTheTime()
{
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return currentTime;
}

export default function ContainerFcWuE(){
    const [simpleField, setSimpleField] = useState('');
    const [containerState, setContainerState] = useState([getTheTime()]);
    /* Without these two lines below, this code will not work as expected
     * The problem is, every time a state field changes the function is
     * is re-executed in it's entirety, so the state fields are completely
     * reset.  I know I was suprised by this fact!
     * 
     * useRef allows you to create a mutable value that does not cause a 
     * re-render when it is changed.
     * 
     * If you remove containerRef and containerRef.current and replace
     * containerRef.current with containerState, you will see the problem.
     * 
     * A description of this problem and a solution can be found at
     * https://stackoverflow.com/questions/56511176/state-being-reset
     */
    const containerRef = useRef([]);
    containerRef.current = containerState;
    const addToList = name => {
        console.log(`Current array: ${containerRef.current}`);
        const update = [...containerRef.current, name];

        console.log(`Updated array: ${update}`);
  
        setContainerState(update);
    }
  
    const addTimeToList = () => {
        addToList(getTheTime())
    };

    const getDisplayData = () => {
        const cdata = containerState.map((item, index) =>
                                    <li key={index}>{item}</li>);
        return cdata;
    }

    useEffect(()=>{
        setInterval(()=>{
            addTimeToList()
        }, 10000);
    }, [])

    useEffect(() =>{
        console.log(getDisplayData())
    })

    useEffect(() =>{
        console.log(simpleField);
    }, [simpleField]);

    useEffect(() =>{
        return ()=>console.log("unmounting the widget");
    });

    return (
        <>
            <input type='text' value={simpleField} onChange={(e) => setSimpleField(e.target.value)} />
            <div onClick={e => setSimpleField("YYY")}>
                <h2>[ue] Click Me</h2>
            </div>
            <ul>{getDisplayData()}</ul>
        </>
    )
}


