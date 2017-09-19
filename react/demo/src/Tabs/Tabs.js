import React, {Component, PropTypes} from 'react'
import Tab from './Tab'
import TabContent from './TabContent'
import './Tabs.css'

class Tabs extends Component {
    constructor (props) {
        super (props)
    }

    static defaultProps = {
        currentIndex: 0,
        onChange: ()=>{}
    }

    getTabs () {
        return React.Children.map(this.props.children, (item, index)=>{
            return React.cloneElement(item, {
                key: index,
                isChoose: index == this.props.currentIndex,
                children: null,
                onClick: this.props.onChange.bind(null, index)
            })
        })
    }

    getContents () {
        return React.Children.map(this.props.children, (item, index)=>{
            return React.createElement(TabContent, {
                key: index,
                isShow: index == this.props.currentIndex,
                children: item.props.children
            })
        })
    }
    render () {
        return (
            <div className="ui-tabs">
                <div className="tabs">
                    {this.getTabs()}
                </div>
                <div className="contents">
                    {this.getContents()}
                </div>
            </div>
        )
    }
}

Tabs.Tab = Tab
export default Tabs
