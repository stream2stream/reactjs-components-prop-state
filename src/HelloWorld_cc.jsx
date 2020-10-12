import React from 'react';

export default class HelloWorldCc extends React.Component {
    constructor()
    {
        super();
        this.greeting = "greeting";
        // In this example props is not available here
        //this._who = this.props.who;
    }
    render()
    {
        // props are available here
        return(
            <div className="container">
                <h1 id={this.greeting}>[cc]Hello World from your trainer {this.props.who}</h1>
            </div>
        );
    }
}
