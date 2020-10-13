import React, { Component } from 'react'

export default class ContainerCc_old extends Component {
    constructor()
    {
        super();
        this.message = "Value: ";
        this.state = {containerState: 0};
    }

    handleEvent()
    {
        this.setState( {containerState : this.state.containerState + 1} );
    }

    render() {
        return (
            <div onClick={this.handleEvent.bind(this)}
>
                <h2>[cc_old]{this.message}{this.state.containerState}</h2>
            </div>
        )
    }
}
