import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: "123",
            title: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            price: 11.96,
        },
        {
            id: "2",
            title: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            price: 11.96,
        }
    ],
}

// This is a slice of the store
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            // This is a reducer
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            // This is a reducer
            const index = state.items.findIndex(basketItem => +basketItem.id === +action.payload.id);
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.payload.id}) as its not in basket!`)
            }
            console.log('sdsdsd>>>>>>>>',newBasket)
            state.items = newBasket;
        }
    }
});

export const {addToBasket,removeFromBasket} = basketSlice.actions;

// This is a selector
export const selectBasket = (state) => state.basket.items;
export const selectBasketWithId = (state, id) => state.basket.items.filter(item => +item.id === +id) ;
export default basketSlice.reducer;
