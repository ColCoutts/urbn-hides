import { createSelector } from 'reselect';

// input selector: function that takes 'select' + detail and gets whole state and just returns a slice of it (usually one layer deep)
const selectCart = state => state.cart;

// memoized selector since used 'createSelector'
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
