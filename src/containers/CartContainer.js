import React, { Component } from 'react'
import {connect} from 'react-redux'
import Cart from '../components/Cart'
import * as msg from '../constants/Message'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'

class CartContainer extends Component {
    showCartItem = (cart) => {
        let result = msg.MSG_CART_EMPTY

        if(cart.length >0){
            result = cart.map( (value,index)=>
                <CartItem
                key={index}
                item={value}
                >

                </CartItem>
            )
        }

        return result
    }
    ShowTotalAmount = (cart) => {
        let result = null

        if(cart.length>0){
            result = <CartResult cart={cart}></CartResult>
        }

        return result
    }
    render() {
        let {cart} = this.props
        // console.log(cart)
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.ShowTotalAmount(cart)}
            </Cart>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer)