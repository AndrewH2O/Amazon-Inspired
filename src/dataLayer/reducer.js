export const initialState = {
  basket: [],
  user: null
};


//export const getSubTotal = (basket) => ;
//selector
export const getBasketTotal = (basket) => basket?.reduce((total, i)=> total + i.price,0);



// listens to the dispatches and triggers actions
// mutable updates in react - need default state
const reducer = (state, action) => {

  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      // logic for adding item to basket
      // return what orig value and basket
      // reducer returns new datalayer
      // ...state is old state the 
      // return basket:[...state.basket, action.item] + action item
      return  { 
        ...state, 
        basket:[...state.basket, action.item]  
      }
      
    case 'REMOVE_FROM_BASKET':
      // logic for removing basket  
      // only removes first instance of duplicates
      const index = state.basket.findIndex(
        (basketItem) => basketItem.basketKey === action.basketKey
      );
      
      let newBasket = [...state.basket]; // copy current basket

      if (index >= 0) {
        newBasket.splice(index, 1); // where item was chopping it by 1
      }else {
        console.warn(`can't remove item (id ${action.id}) as its not in basket`);
      }

      return  { ...state, basket: newBasket }

    case "SET_USER" :
      return {
        ...state,
        user: action.user
      }
      
    default:
      return state;  
  }
}

export default reducer;