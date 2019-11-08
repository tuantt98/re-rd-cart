import React, { Component } from 'react'
import {connect} from 'react-redux'
import Cart from '../components/Cart'
import * as msg from '../constants/Message'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import {actDeleteProductInCart,actChangeMessage,actUpdateProductInCart} from '../actions/index'

class CartContainer extends Component {
    showCartItem = (cart) => {
        let result = 
                    <tr> 
                    <td>{msg.MSG_CART_EMPTY}</td>
                    </tr> 

        if(cart.length >0){
            result = cart.map( (value,index)=>
                <CartItem
                key={index}
                item={value}
                onDeleteProductInCart ={this.props.onDeleteProductInCart}
                onChangeMessage = {this.props.onChangeMessage}
                onUpdateProductInCart ={this.props.onUpdateProductInCart}
                >

                </CartItem>
            )
        }

        return result
    }
    ShowTotalAmount = (cart) => {
        let total = 0;

        // console.log(cart)
        if(cart.length >0 ){
            for(let i=0; i< cart.length; i++){
                total += cart[i].product.price * cart[i].quantity
            }
        }
        // console.log('Tính tổng: 'total)
        return <CartResult total={total}></CartResult>
    }
    render() {
        let {cart} = this.props
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message)=>{
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product,quantity) =>{
            dispatch(actUpdateProductInCart(product,quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)