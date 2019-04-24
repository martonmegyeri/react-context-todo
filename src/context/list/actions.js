import { ADD_ITEM, COMPLETE_ITEM, DELETE_ITEM } from './constants';

export const addItem = (item, dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
}

export const completeItem = (item, dispatch) => {
  dispatch({
    type: COMPLETE_ITEM,
    payload: item
  });
}

export const deleteItem = (item, dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: item
  });
}
