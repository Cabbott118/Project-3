// Making requests to back-end
import axios from 'axios';
import {
  GET_ITEMS,
  GET_FILTERED_ITEMS,
  ADD_ITEM,
  ADD_FAIL,
  EDIT_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from './constants';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

// Go to itemReducer and check type
export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios // Proxy giving ability to shorten endpoint
    .get('/api/items')
    .then((res) =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Go to itemReducer and check type
export const getFilteredItems = (data) => (dispatch) => {
  dispatch(setItemsLoading());
  axios // Proxy giving ability to shorten endpoint
    .get(`/api/items/${data}`)
    .then((res) =>
      dispatch({
        type: GET_FILTERED_ITEMS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = (item) => (dispatch, getState) => {
  axios
    // Attaching token to request in header
    .post('/api/items', item, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'ADD_FAIL')
      );
      dispatch({
        type: ADD_FAIL,
      });
    });
};

export const editItem = (item) => (dispatch, getState) => {
  axios
    // Attaching token to request in header
    .put(`/api/items/${item.id}`, item, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: EDIT_ITEM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = (id) => (dispatch, getState) => {
  axios
    // Attaching token to request in header
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    // Set from false to true
    type: ITEMS_LOADING,
  };
};
