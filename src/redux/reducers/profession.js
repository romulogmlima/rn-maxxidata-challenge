import {
  SET_LIST_PROFESSIONS,
  SET_LOADING_LIST_PROFESSIONS,
} from '../actions/profession';

const initialState = {
  listProfessions: [],
  isLoading: false,
};

export const professionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIST_PROFESSIONS:
      return {
        ...state,
        listProfessions: payload,
      };
    case SET_LOADING_LIST_PROFESSIONS:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
