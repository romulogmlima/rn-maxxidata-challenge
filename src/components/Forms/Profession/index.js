import { useFormik } from 'formik';
import React from 'react';
import { ScrollView } from 'react-native';

import { schemaFormProfession } from '../../../validations';
import BasicButton from '../../Buttons/BasicButton';
import BasicInput from '../../Inputs/BasicInput';
import LabeledSwitch from '../../LabeledSwitch';

const FormProfession = ({ initialValues, onSubmit, submitButtonTitle }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: schemaFormProfession,
    onSubmit,
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
    isValid,
    handleSubmit,
    setFieldValue,
  } = formik;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <BasicInput
        label="Descrição *"
        placeholder="Ex: Motorista"
        onChangeText={handleChange('description')}
        onBlur={handleBlur('description')}
        value={values.description}
        error={touched.description && errors.description}
        autoCapitalize="words"
      />
      <LabeledSwitch
        label="Cadastro ativo"
        value={values.status}
        onValueChange={(value) => setFieldValue('status', value)}
      />
      <BasicButton
        title={submitButtonTitle}
        onPress={handleSubmit}
        isDisabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
      />
    </ScrollView>
  );
};

export default FormProfession;
