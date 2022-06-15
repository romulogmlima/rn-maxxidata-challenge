import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import FormProfessional from '../../../components/Forms/Professional';
import InfoDialog from '../../../components/InfoDialog';
import Wrapper from '../../../components/Wrapper';
import { api } from '../../../services';

const EditProfessional = ({ route }) => {
  const { goBack } = useNavigation();
  const [isDialogVisible, setDialogVisible] = useState(false);

  const { initialValues } = route.params;

  const onSubmit = async (values) => {
    const { profession, ...rest } = values;
    await api.put(`/professionals/${values.id}`, rest);
    setDialogVisible(true);
  };

  return (
    <Wrapper>
      <FormProfessional
        initialValues={initialValues}
        onSubmit={onSubmit}
        submitButtonTitle="Editar"
      />
      <InfoDialog
        visible={isDialogVisible}
        titlePrimaryButton="Voltar para tela inicial"
        message={`Profissional editado\n com sucesso`}
        onPressPrimaryButton={() => {
          goBack();
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default EditProfessional;
