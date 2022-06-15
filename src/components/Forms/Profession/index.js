import { useFormik } from 'formik';
import React from 'react';
import { ScrollView } from 'react-native';

import { schemaFormProfession } from '../../../validations';
import Button from '../../Buttons/Button';
import FormLabeledSwitch from '../../FormLabeledSwitch';
import Input from '../../Input';

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
      <Input
        label="Descrição *"
        placeholder="Ex: Motorista"
        onChangeText={handleChange('description')}
        onBlur={handleBlur('description')}
        value={values.description}
        error={touched.description && errors.description}
        autoCapitalize="words"
      />
      <FormLabeledSwitch
        label="Cadastro ativo"
        value={values.status}
        onValueChange={(value) => setFieldValue('status', value)}
      />
      <Button
        title={submitButtonTitle}
        onPress={handleSubmit}
        isDisabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
      />
    </ScrollView>
  );
};

export default FormProfession;
