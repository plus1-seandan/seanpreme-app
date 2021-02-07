export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToRemove.id &&
      cartItem.size === cartItemToRemove.size
  );
  if (existingCartItem.quantity === 1) {
    //remove the item entirely
    const newCart = cartItems.filter(
      (cartItem) => cartItem !== existingCartItem
    );
    return newCart;
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id &&
    cartItem.size === cartItemToRemove.size
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const editCartItem = (cartItems, cartItemToEdit) => {
  console.log({ old: cartItemToEdit.oldItem, cartItems });
  const oldItem = cartItems.find(
    (cartItem) =>
      cartItem.id === cartItemToEdit.oldItem.id &&
      cartItem.size === cartItemToEdit.oldItem.size.toLowerCase()
  );
  //remove old item
  const newCart = cartItems.filter((cartItem) => cartItem !== oldItem);
  return addItemToCart(newCart, {
    ...cartItemToEdit.newItem,
    size: cartItemToEdit.newItem.size.toLowerCase(),
  });
};
