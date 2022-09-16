import React from 'react';

export default class HelloWorldCc2 extends React.Component {
    constructor(props)
    {
        super(props);
        this.greeting = "greeting";
        // In this example props is available here
        this._who = props.who;
    }

    setDocTitle(title)
    {
        document.title = title;
    }
    componentDidMount()
    {
        this.setDocTitle(`App ${this._who}`);
    }
    render()
    {
        // props are available here
        return(
            <div className="container">
                <h1 id={this.greeting}>[cc2]Hello World from your trainer {this._who}</h1>
            </div>
        );
    }
}
