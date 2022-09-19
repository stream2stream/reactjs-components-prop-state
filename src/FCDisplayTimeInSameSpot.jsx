import React, { useState } from 'react'
import { useEffect } from 'react';

function getTheTime()
{
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return currentTime;
}

export default function FCDisplayTimeInSameSpot(){
    console.log("Executing FCDisplayTimeInSameSpot()");

    const [containerState, setContainerState] = useState(["<NO TIME SET>"]);
  
    const getDisplayData = () => {
        const cdata = containerState
        return cdata;
    }

    // This useEffect will only run once when the component is first mounted
    useEffect(()=>{
        setInterval(()=>{
            const timeStamp = containerState;
            setContainerState(getTheTime());
        }, 30000);
    }, [])

    // This useEffect will run every time the component re-renders
    useEffect(() =>{
        console.log(getDisplayData())
    })

    // This useEffect will only run once when the component is first  mounted
    useEffect(() =>{
        console.log("mounting the FCDisplayTimeInSameSpot");
    }, []);

    // This useEffect will run every time the component is unmounted
    useEffect(() =>{
        return ()=>console.log("unmounting the FCDisplayTimeInSameSpot");
    });

    return (
        <>
            <p>Time is - {getDisplayData()}</p>
        </>
    )
}


