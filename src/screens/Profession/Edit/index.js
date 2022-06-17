import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import InfoDialog from '../../../components/Dialogs/InfoDialog';
import FormProfession from '../../../components/Forms/Profession';
import Wrapper from '../../../components/Wrapper';
import useProfession from '../../../hooks/useProfession';

const EditProfession = ({ route }) => {
  const { update } = useProfession();
  const { goBack } = useNavigation();
  const [isDialogVisible, setDialogVisible] = useState(false);

  const { initialValues } = route.params;

  const onSubmit = async (values) => {
    update(values.id, values);
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
        titleButton="Voltar"
        message={`Profissão editada\n com sucesso`}
        onPress={() => {
          goBack();
          setDialogVisible(false);
        }}
      />
    </Wrapper>
  );
};

export default EditProfession;
