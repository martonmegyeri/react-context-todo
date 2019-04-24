import { ADD_ITEM, COMPLETE_ITEM, DELETE_ITEM } from './constants';

export const initialState = {
  items: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [ action.payload, ...state.items ]
      }

    case COMPLETE_ITEM:
      return {
        ...state,
        items: state.items.map(item => ({
          id: item.id,
          completed: (item.id === action.payload.id) ? !item.completed : item.completed,
          name: item.name
        }))
      }

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }

    default:
      return state;
  }
};

export default reducer;
