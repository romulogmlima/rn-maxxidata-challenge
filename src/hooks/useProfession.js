import { useDispatch, useSelector } from 'react-redux';

import { setListProfessions } from '../redux/actions/profession';
import { api } from '../services';

export default () => {
  const { listProfessions, isLoading } = useSelector(
    (state) => state.profession
  );

  const dispatch = useDispatch();

  const findAll = async () => {
    const response = await api.get('/professions');
    dispatch(setListProfessions(response));
  };

  const destroy = async (id) => {
    await api.delete(`/professions/${id}`);
    findAll();
  };

  const update = async (id, data) => {
    await api.put(`/professions/${id}`, data);
    findAll();
  };

  const create = async (data) => {
    await api.post('/professions', data);
  };

  return {
    listProfessions,
    isLoading,
    findAll,
    destroy,
    update,
    create,
  };
};
