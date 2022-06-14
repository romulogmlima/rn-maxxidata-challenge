import { useFormik } from 'formik';
import React from 'react';

import Button from '../../components/Buttons/Button';
import FormLabeledSwitch from '../../components/FormLabeledSwitch';
import Input from '../../components/Input';
import Wrapper from '../../components/Wrapper';
import { schemaRegisterProfession } from '../../validations';

const RegisterProfession = ({ route }) => {
  const { initialValues } = route.params;

  const onSubmit = (values) => {
    console.log('VALUES: ', values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schemaRegisterProfession,
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
    <Wrapper>
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
        title="Cadastrar"
        onPress={handleSubmit}
        isDisabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
      />
    </Wrapper>
  );
};

export default RegisterProfession;
