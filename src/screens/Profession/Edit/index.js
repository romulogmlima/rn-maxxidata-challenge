import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import FormProfession from '../../../components/Forms/Profession';
import InfoDialog from '../../../components/InfoDialog';
import Wrapper from '../../../components/Wrapper';
import { api } from '../../../services';

const EditProfession = ({ route }) => {
  const { goBack } = useNavigation();
  const [isDialogVisible, setDialogVisible] = useState(false);

  const { initialValues } = route.params;

  const onSubmit = async (values) => {
    await api.put(`/professions/${values.id}`, values);
    setDialogVisible(true);
  };

  return (
    <Wrapper>
      <FormProfession
        initialValues={initialValues}
        onSubmit={onSubmit}
        submitButtonTitle="Editar"
      />
      <InfoDialog
        visible={isDialogVisible}
        titlePrimaryButton="Voltar para tela inicial"
        message={`Profissão editada\n com sucesso`}
        onPressPrimaryButton={() => {
          goBack();
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default EditProfession;
