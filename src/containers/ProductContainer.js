import React, { Component } from 'react'
import {connect} from 'react-redux'
import Products from '../components/Products'
import Product from '../components/Product'
import PropTypes from 'prop-types'
import {actAddToCart, actChangeMessage} from '../actions/index'

class ProductContainer extends Component {

    showProducts = (products) => {
        return products.map( (value,index) =>
            <Product
            key={index}
            product={value}
            onAddToCart={this.props.onAddToCart}
            onChangeMessage = {this.props.onChangeMessage}
            >
            </Product> )  
    }
    
    render() {
        let {products} = this.props
        return (
            
            <Products > 
            {this.showProducts(products)}
            </Products>
        )
    }
}

// thiết lập kiểu bắt buộc cho các thuộc tính
ProductContainer.propTypes={
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description:  PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}


const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage: (message)=>{
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
