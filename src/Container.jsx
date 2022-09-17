import React, { Component } from 'react'

export default class ContainerCc extends Component {
    constructor()
    {
        super();
        this.message = "Value: ";
        this.state = {containerState: 0};
    }
    render() {
        return (
            <div onClick={() => 
            {
                this.setState( {containerState : this.state.containerState + 1} );
            }}>
                <h2>[cc]{this.message}{this.state.containerState}</h2>
            </div>
        )
    }
}
