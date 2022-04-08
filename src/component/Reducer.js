const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    let tempcart = cart.filter((items) => items.id === action.payload.id);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === "REMOVE") {
    return cart.filter((items) => items.id !== action.payload.id);
  }
  if (action.type === "INCREASE") {
    let tempcart = cart.map((items) => {
      if (items.id === action.payload.id) {
        return { ...items, quantity: items.quantity + 1 };
      }
      return items;
    });
    return tempcart;
  }
  if (action.type === "DECREASE") {
    let tempcart = cart.map((items) => {
      if (items.id === action.payload.id) {
        return { ...items, quantity: items.quantity - 1 };
      }
      return items;
    });
    return tempcart;
  }
  return cart;
};

export default Reducer;
