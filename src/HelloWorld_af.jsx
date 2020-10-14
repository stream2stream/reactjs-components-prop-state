import React from 'react'
import PropTypes from 'prop-types'

export const HelloWorldAf = (props) => {
    const greeting = "greeting";
    const _who = props.who;
    return (
        <div>
        <div className="container">
            <h1 id={greeting}>[afc]Hello World from your trainer {_who}</h1>
        </div>
        </div>
    )
}

HelloWorldAf.defaultProps = {
    who: "unassigned"
}

HelloWorldAf.propTypes = {
    who: PropTypes.string.isRequired
}


