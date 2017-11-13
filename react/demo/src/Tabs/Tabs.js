import React, {Component, PropTypes} from 'react'
import Tab from './Tab'
import TabContent from './TabContent'
import styles from './Tabs.css'
import styles2 from './Tabs2.css'
console.log(styles);
console.log(styles2.color);
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
            <div className={styles["ui-tabs"]}>
                <div className={styles["tabs"] + " " + styles2.base2}>
                    {this.getTabs()}
                </div>
                <div className={styles.bg}>
                    {this.getContents()}
                </div>
            </div>
        )
    }
}

Tabs.Tab = Tab
export default Tabs
