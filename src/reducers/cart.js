import * as types from '../constants/ActionType'

var data = JSON.parse(localStorage.getItem('CART'))

let initalState = data ? data : [
    {
        product:{
            id: 1,
            name: ' SS 10',
            image: 'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-600x600.jpg',
            description: 'Sản phẩm ss',
            price: 500,
            inventory: 10,
            rating: 5
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
        name: ' IP 11 Pro Max',
        image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-didongviet_1_1.jpg',
        description: 'Sản phẩm IP',
        price: 700,
        inventory: 20,
        rating: 4
        },
        quantity: 5
        
    }
]

const cart = (state = initalState, action)=>{

    switch(action.type){
        case types.ADD_TO_CART:
            console.log(action)
            return [...state]
        default: return [...state]
    }
}
export default cart