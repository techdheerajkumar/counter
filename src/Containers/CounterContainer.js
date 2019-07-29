import React, { Component } from 'react'
import { connect } from 'react-redux';
import CounterComponent from '../Components/CounterComponent'
import CounterControlComponent from '../Components/CounterControlComponent'

class CounterContainer extends Component {
    render() {
        return (
            <div>
                <CounterComponent name={this.props.name} />
                <CounterControlComponent counter={this.props.ctr} clicked={this.props.onIncrementCounter} clickedDecrement={this.props.onDecrementCounter} />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strResult => {
                        return (<li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}> {strResult.value}</li>)
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        ctr: state.counter,
        storeResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INC_COUNTER', payload: 10 }),
        onDecrementCounter: () => dispatch({ type: 'DEC_COUNTER', payload: 10 }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resultElid: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);//connects store to components