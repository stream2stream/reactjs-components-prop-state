import React, { useState } from 'react'

export default function ContainerFc(){
    const message = "Value: ";
    const [containerState, setSelvynState] = useState(0);

        return (
            <div onClick={() => 
                {
                    //this.state.containerState = this.containerState + 1;
                    setSelvynState(containerState + 1);
                }}>
                <h2>[fc]{message}{containerState}</h2>
            </div>
        )
}


