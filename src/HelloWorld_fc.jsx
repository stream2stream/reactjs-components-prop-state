import React from 'react';

export default function HelloWorldFc(props) {
    const greeting = "greeting";
    const _who = props.who;
    return(
        <div className="container">
            <h1 id={greeting}>[fc]Hello World from your trainer {_who}</h1>
        </div>
    );
}

