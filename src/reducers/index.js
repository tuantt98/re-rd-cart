import products from './products'
import cart from './cart'

const redux= require('redux')


const appReducers = redux.combineReducers({
    products,
    cart
})

export default appReducers
