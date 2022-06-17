import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import InfoDialog from '../../../components/Dialogs/InfoDialog';
import FormProfessional from '../../../components/Forms/Professional';
import Wrapper from '../../../components/Wrapper';
import useProfessional from '../../../hooks/useProfessional';

const initialValues = {
  fullName: '',
  phoneNumber: '',
  email: '',
  professionId: '',
  status: true,
};

const RegisterProfessional = () => {
  const { create } = useProfessional();
  const { goBack } = useNavigation();
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onSubmit = async (values) => {
    create(values);
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
        titleButton="Voltar para tela inicial"
        message={`Profissional cadastrado\n com sucesso`}
        onPress={() => {
          goBack();
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default RegisterProfessional;
