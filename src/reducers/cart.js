import * as types from '../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'))

let initalState = data ? data : [
    // {
    //     product:{
    //         id: 1,
    //         name: ' SS 10',
    //         image: 'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-600x600.jpg',
    //         description: 'Sản phẩm ss',
    //         price: 500,
    //         inventory: 10,
    //         rating: 5
    //     },
    //     quantity: 5
    // },
    // {
    //     product: {
    //         id: 3,
    //     name: ' IP 11 Pro Max',
    //     image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-didongviet_1_1.jpg',
    //     description: 'Sản phẩm IP',
    //     price: 700,
    //     inventory: 20,
    //     rating: 4
    //     },
    //     quantity: 5
        
    // }
]

const findIndexProductInCart = (state, product) => {
    
    var result = -1
    // state.filter( (value, index) =>{
    //     if (value.product.id === product.id){

    //     }
    // })
    if(state.length >0){
        for(let i=0; i< state.length; i++){
            if(state[i].product.id === product.id){
                result = i
            }
        }
    }
    
    return result
}


const cart = (state = initalState, action)=>{
    let {product, quantity} = action
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            index = findIndexProductInCart(state,product);
            if(index !== -1){
                state[index].quantity += quantity
            }else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        case types.DELETE_PRODUCT_IN_CART:
            state = state.filter(value => value.product.id !== action.product.id)
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        case types.UPDATE_PRODUCT_IN_CART:
            index = findIndexProductInCart(state,product)
            if(index !== -1){
                state[index].quantity = quantity
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}
export default cart