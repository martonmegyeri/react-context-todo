import listReducer, { initialState as initialListState } from './list/reducer';

export const initialState = {
  list: { ...initialListState }
};

const rootReducer = (state, action) => ({
  list: listReducer(state.list, action)
});

export default rootReducer;