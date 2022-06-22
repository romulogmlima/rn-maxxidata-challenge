import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import InfoDialog from '../../../components/Dialogs/InfoDialog';
import FormProfessional from '../../../components/Forms/Professional';
import Wrapper from '../../../components/Wrapper';
import useProfessional from '../../../hooks/useProfessional';

const EditProfessional = ({ route }) => {
  const { goBack } = useNavigation();
  const { update } = useProfessional();
  const [isDialogVisible, setDialogVisible] = useState(false);

  const { initialValues } = route.params;

  const onSubmit = async (values) => {
    const { profession, ...rest } = values;
    update(values.id, rest);
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
        titleButton="Voltar"
        message={`Profissional editado\n com sucesso`}
        onPress={() => {
          goBack();
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default EditProfessional;
