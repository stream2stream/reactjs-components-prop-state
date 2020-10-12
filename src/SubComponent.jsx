import React from 'react'

function SubComponent(props) {
    const eventHandler = props.evh;
    const msg = props.msg;
    return (
        <div onClick={() => {
            eventHandler();
        }}>
            <h1>{msg}</h1>    
        </div>
    )
}


export default SubComponent

