export const initialState = {
    basket: [
        {
            id: 2,
            title: "Nirav Dadhaniya and Chirag Patel are the best",
            price: 11.86,
            rating: 5,   
            image: "https://pub-static.haozhaopian.net/assets/projects/pages/706b5120-accb-11e8-957c-1564ed1e0dc9_33553b99-898d-4c41-bbb2-710e022973d1_thumb.jpg"
        },
        {
            id: 3,
            title: "Nirav Dadhaniya and Chirag Patel are the best",
            price: 11.86,
            rating: 5,   
            image: "https://pub-static.haozhaopian.net/assets/projects/pages/706b5120-accb-11e8-957c-1564ed1e0dc9_33553b99-898d-4c41-bbb2-710e022973d1_thumb.jpg"
        }
    ],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount,0);

const reducer = (state, action) => {
    //console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0) {
                newBasket.splice(index, 1);
            }else{
              
            }
            return { ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;