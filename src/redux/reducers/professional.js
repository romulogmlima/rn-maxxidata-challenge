import {
  SET_LIST_PROFESSIONALS,
  SET_LOADING_LIST_PROFESSIONALS,
} from '../actions/professional';

const initialState = {
  listProfessionals: [],
  isLoading: false,
};

export const professionalReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_LIST_PROFESSIONALS:
      return {
        ...state,
        listProfessionals: payload,
      };

    case SET_LOADING_LIST_PROFESSIONALS:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
