import React, { Component } from 'react';
import {Counter} from './Counter'
import {Tabs} from './Tabs'
// import {Dialog} from './Dialog'
import {Button} from './Button'

const Tab = Tabs.Tab
class App extends Component {
    constructor () {
        super ()
        this.state = {
            currentIndex: 0,
            isOpen: false,
            testLog: "initial" + new Date()
        }
    }

    componentWillMount () {
        this.setState({
            testLog: "will" + new Date()
        })
    }

    componentDidMount () {
        this.setState({
            testLog: "did" + new Date()
        })
    }

    componentWillReceiveProps () {
        this.setState({
            testLog: "Receive" + new Date()
        })
    }

    shouldComponentUpdate () {
        this.setState({
            testLog: "Should" + new Date()
        })
        return true
    }

    componentWillUpdate () {

    }

    componentDidUpdate () {

    }

    onTabsChange = (index) => {
        this.setState({
            currentIndex: index
        })
    }
    openDialog = () => {
        this.setState({
            isOpen: true
        })
    }
    closeDialog = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        console.log(this.state.testLog);
        return (
            <div className="App">
                <Tabs
                    currentIndex={this.state.currentIndex}
                    onChange={this.onTabsChange}
                >
                    <Tab title={<span>tab1</span>}>内容1</Tab>
                    <Tab title="tab2">内容2</Tab>
                    <Tab title="tab3">内容3</Tab>
                </Tabs>
                {/* <Counter/> */}
                {/* <Button text="open" onClick={this.openDialog}/> */}
            </div>
        );
    }
}

export default App;
