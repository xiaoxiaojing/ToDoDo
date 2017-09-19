import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import DialogPanel from './DialogPanel'

class Dialog extends Component {
    constructor (props) {
        super (props)
    }

    componentWillMount () {

    }

    componentDidMount () {
        this.node = document.body
        ReactDOM.unstable_renderSubtreeIntoContainer(this, <DialogPanel {...this.props}/>, this.node)
    }

    componentWillUnmount () {
        this.node = null
    }

    renderPortal (props) {
        if (!this.node) {
            this.node = document.createElement("div")
            document.body.appendChild(this.node)
        }
    }

    render () {
        return null
    }
}
export default Dialog
