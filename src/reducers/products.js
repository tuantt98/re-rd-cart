const productInitialState = [{
        id: 1,
        name: ' SS 10',
        image: 'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-600x600.jpg',
        description: 'Sản phẩm ss',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: ' N 10',
        image: 'https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-silver-400x460.png',
        description: 'Sản phẩm ss',
        price: 600,
        inventory: 15,
        rating: 4
    },
    {
        id: 3,
        name: ' IP 11 Pro Max',
        image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-didongviet_1_1.jpg',
        description: 'Sản phẩm IP',
        price: 700,
        inventory: 20,
        rating: 4
    },
]

const product = (state = productInitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default product