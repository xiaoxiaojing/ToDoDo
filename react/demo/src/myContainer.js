const MyContainer = (WrappedCompoent) =>
    class extends React.Component {
        render () {
            return <WrappedCompoent {...this.props}/>
        }
    }
