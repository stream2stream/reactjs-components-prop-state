import React, { useState } from 'react'
import SubComponent from './SubComponent';

export default function ContainerFcWithChild(){
    const message = "Value: ";
    const [containerState, setcontainerState] = useState(0);

        return (
            <div>
                <h2>[fc]{message}{containerState} 
                    <SubComponent msg="FC CLICK ME" evh={() => {
                        setcontainerState(containerState + 2);
                    }}/>
                </h2>
            </div>
        )
}
