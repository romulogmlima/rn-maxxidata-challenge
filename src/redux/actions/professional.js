export const SET_LIST_PROFESSIONALS = 'professional/SET_LIST_PROFESSIONALS';
export const setListProfessionals = (list) => ({
  type: SET_LIST_PROFESSIONALS,
  payload: list,
});

export const SET_LOADING_LIST_PROFESSIONALS =
  'professional/SET_LOADING_LIST_PROFESSIONALS';
export const setLoadingListProfessionals = (isLoading) => ({
  type: SET_LOADING_LIST_PROFESSIONALS,
  payload: isLoading,
});
