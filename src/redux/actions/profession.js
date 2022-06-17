export const SET_LIST_PROFESSIONS = 'profession/SET_LIST_PROFESSIONS';
export const setListProfessions = (list) => ({
  type: SET_LIST_PROFESSIONS,
  payload: list,
});

export const SET_LOADING_LIST_PROFESSIONS =
  'profession/SET_LOADING_LIST_PROFESSIONS';
export const setLoadingListProfessions = (isLoading) => ({
  type: SET_LOADING_LIST_PROFESSIONS,
  payload: isLoading,
});
