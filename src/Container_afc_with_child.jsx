import React, { useState } from 'react'
import SubComponent from './SubComponent';

export const ContainerAfcWithChild = () =>{
    const message = "Value: ";
    const [containerState, setcontainerState] = useState(0);

        return (
            <div>
                <h2>[afc_wc]{message}{containerState} 
                    <SubComponent msg="AFC CLICK ME" evh={() => {
                        setcontainerState(containerState + 2);
                    }}/>
                </h2>
            </div>
        )
}
