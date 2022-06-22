import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import InfoDialog from '../../../components/Dialogs/InfoDialog';
import FormProfession from '../../../components/Forms/Profession';
import Wrapper from '../../../components/Wrapper';
import useProfession from '../../../hooks/useProfession';

const initialValues = {
  description: '',
  status: true,
};

const RegisterProfession = () => {
  const { create } = useProfession();
  const { goBack } = useNavigation();
  const [isDialogVisible, setDialogVisible] = useState(false);

  const onSubmit = async (values) => {
    create(values);
    setDialogVisible(true);
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
        titleButton="Voltar para tela inicial"
        message={`Profissão cadastrada\n com sucesso`}
        onPress={() => {
          goBack();
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default RegisterProfession;
