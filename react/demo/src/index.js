import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
const MyContainer = (WrappedCompoent) => {
    return class extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                name: ""
            }
            this.onNameChange = this.onNameChange.bind(this)
        }
        onNameChange (event) {
            console.log(event);
            this.setState({
                name: event.target.value
            })
        }
        proc (instance) {
            console.log(1);
            instance && instance.test()
        }
        render () {
            const newProps = Object.assign({
                text: "newText",
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }, this.props, {ref: this.proc.bind(this)})
            return (
                <div>
                    <WrappedCompoent {...newProps}/>
                </div>
            )
        }
    }
}

@MyContainer
class MyComponent extends React.Component {
    test () {
        console.log(123);
    }
    render () {
        return <div>{this.props.text}<input name="name" {...this.props.name}/></div>
    }
}

ReactDOM.render(
    <div><MyComponent/>123</div>,
    document.getElementById('root')
)
