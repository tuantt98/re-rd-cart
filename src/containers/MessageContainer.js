import React, { Component } from 'react'
import {connect} from 'react-redux'
import Message from '../components/Message'

class MessageContainer extends Component {
    render() {
        let {message} = this.props
        return (
            <div>
                <Message message={message}>
                
                </Message>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message
    }
}



export default connect(mapStateToProps, null,)(MessageContainer)