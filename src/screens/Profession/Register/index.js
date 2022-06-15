import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import FormProfession from '../../../components/Forms/Profession';
import InfoDialog from '../../../components/InfoDialog';
import Wrapper from '../../../components/Wrapper';
import { api } from '../../../services';

const initialValues = {
  description: '',
  status: true,
};

const RegisterProfession = () => {
  const { goBack } = useNavigation();
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onSubmit = async (values) => {
    // const response = await api.post('/professions', values);
    // setDialogVisible(true);
  };

  return (
    <Wrapper>
      <FormProfession
        initialValues={initialValues}
        onSubmit={onSubmit}
        submitButtonTitle="Cadastrar"
      />
      <InfoDialog
        visible={isDialogVisible}
        titlePrimaryButton="Voltar para tela inicial"
        message={`Profissão cadastrada\n com sucesso`}
        onPressPrimaryButton={() => {
          goBack();
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default RegisterProfession;
