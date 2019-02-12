import { actionTypes } from "../actions";

const newProductReducer = (newProduct = {}, action) => {
  switch (action.type) {
    case actionTypes.setNewProductCategory:
      return { ...newProduct, category: action.payload };
    case actionTypes.setNewProductOptions:
      let newOptions = [];
      if (newProduct.options) {
        newOptions = [...newProduct.options, action.payload];
      } else {
        newOptions = [...newOptions, action.payload];
      }
      return { ...newProduct, options: newOptions };
    default:
      return newProduct;
  }
};

export default newProductReducer;