import React, { useState } from 'react'

export default function ContainerFc(){
    const message = "Value: ";
    const [containerState, setSelvynState] = useState([]);
    const addToList = name => {
        const update = [...containerState, name];
        setSelvynState(update);
    }

    const fx = (e) => 
    {
        //this.state.containerState = this.containerState + 1;
        setSelvynState(containerState + 1);
    }

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


