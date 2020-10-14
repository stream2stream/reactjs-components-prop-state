import React, { useState } from 'react'
import SubComponent from './SubComponent';

export default function ContainerFcWithChild(){
    const message = "Value: ";
    const [containerState, setcontainerState] = useState(0);
    const fx = (x , y) => {
        setcontainerState(containerState + 2);
    }

        return (
            <div>
                <h2>[fc_wc]{message}{containerState} 
                    <SubComponent msg="FC CLICK ME" evh={fx}/>
                </h2>
            </div>
        )
}
