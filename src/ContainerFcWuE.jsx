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
    const containerRef = useRef([]);
    containerRef.current = containerState;
    const addToList = name => {
        console.log(`Current array: ${containerRef.current}`);
        const update = [...containerRef.current, name];
        //let update = [...containerRef.current];
        //update.push(name);
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


