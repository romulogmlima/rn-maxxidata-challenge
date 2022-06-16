import { useDispatch, useSelector } from 'react-redux';

import { setListProfessionals } from '../redux/actions/professional';
import { api } from '../services';

export default () => {
  const { listProfessionals, isLoading } = useSelector(
    (state) => state.professional
  );
  const dispatch = useDispatch();

  const findAll = async () => {
    const response = await api.get('/professionals?_expand=profession');
    dispatch(setListProfessionals(response));
  };

  const destroy = async (id) => {
    await api.delete(`/professionals/${id}`);
    findAll();
  };

  const update = async (id, data) => {
    await api.put(`/professionals/${id}`, data);
    findAll();
  };

  const create = async (data) => {
    await api.post('/professionals', data);
  };

  return {
    listProfessionals,
    isLoading,
    findAll,
    destroy,
    update,
    create,
  };
};
