import React, {Component} from 'react'
import {Button} from '../Button'

export default class Counter extends Component {
    constructor (props) {
        super (props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        return (
            <div>
                <p>count: {this.state.count}</p>
                <Button onClick={this.handleClick} text="add"/>
            </div>
        )
    }
}
