import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import FormProfessional from '../../../components/Forms/Professional';
import InfoDialog from '../../../components/InfoDialog';
import Wrapper from '../../../components/Wrapper';
import { api } from '../../../services';

const initialValues = {
  fullName: '',
  phoneNumber: '',
  email: '',
  professionId: '',
  status: false,
};

const RegisterProfessional = () => {
  const { goBack } = useNavigation();
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onSubmit = async (values) => {
    await api.post('/professionals', values);
    setDialogVisible(true);
  };

  return (
    <Wrapper>
      <FormProfessional
        initialValues={initialValues}
        onSubmit={onSubmit}
        submitButtonTitle="Cadastrar"
      />
      <InfoDialog
        visible={isDialogVisible}
        titlePrimaryButton="Voltar para tela inicial"
        message={`Profissional cadastrado\n com sucesso`}
        onPressPrimaryButton={() => {
          goBack();
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default RegisterProfessional;
