import React, { Component } from 'react'

export default class CounterControlComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.clicked}>+</button>
                <button onClick={this.props.clickedDecrement}>-</button>
            </div>
        )
    }
}
