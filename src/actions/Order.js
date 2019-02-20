import types from "./actionTypes";
import kidsnParty from "../apis/kidsnParty";

const show = order_id => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/orders/${order_id}`);

    dispatch({ type: types.selectOrder, payload: response.data.order });
  };
};

const update = () => {
  return async function(dispatch, getState) {
    const requestBody = getState().selectedOrder;
    const { order_id } = requestBody;
    const response = await kidsnParty.put(`/orders/${order_id}`, requestBody);
    dispatch({ type: types.updateOrder, payload: response.data });
  };
};

const patch = value => {
  return async function(dispatch, getState) {
    const { order_id } = getState().selectedOrder;
    const requestBody = { order_status_id: value };
    const response = await kidsnParty.patch(`/orders/${order_id}`, requestBody);

    dispatch({ type: types.updateOrder, payload: response.data });
  };
};

const index = () => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/allorders`);
    dispatch({ type: types.getOrders, payload: response.data.orders });
  };
};

const onPageChange = pageNumber => {
  return async function(dispatch) {
    const response = await kidsnParty.get(`/allorders`, {
      params: {
        page: pageNumber
      }
    });

    dispatch({ type: types.getOrders, payload: response.data.orders });
  };
};
export default {
  index,
  show,
  update,
  patch,
  onPageChange
};
