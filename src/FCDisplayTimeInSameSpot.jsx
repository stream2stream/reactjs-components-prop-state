import React, { useState } from 'react'
import { useEffect } from 'react';

function getTheTime()
{
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return currentTime;
}

export default function FCDisplayTimeInSameSpot(){
    const [containerState, setContainerState] = useState([getTheTime()]);
  
    const getDisplayData = () => {
        const cdata = containerState
        return cdata;
    }

    // This useEffect will only run once when the compone is mounted
    useEffect(()=>{
        setInterval(()=>{
            setContainerState(getTheTime());
        }, 10000);
    }, [])

    // This useEffect will run every time the component re-remders
    useEffect(() =>{
        console.log(getDisplayData())
    })

    // This useEffect will run every time the component is unmounted
    useEffect(() =>{
        return ()=>console.log("unmounting the widget");
    });

    return (
        <>
            <p>Time is - {getDisplayData()}</p>
        </>
    )
}


