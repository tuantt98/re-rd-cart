import products from './products'
import cart from './cart'
import message from './message'

const redux= require('redux')


const appReducers = redux.combineReducers({
    products,
    cart,
    message
})

export default appReducers
