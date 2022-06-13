import { useFormik } from 'formik';
import React from 'react';

import Button from '../../components/Buttons/Button';
import FormLabeledSwitch from '../../components/FormLabeledSwitch';
import Input from '../../components/Input';
import Wrapper from '../../components/Wrapper';
import { schemaRegisterProfession } from '../../validations';

const initialValues = {
  descricao: '',
  situacao: true,
};

const RegisterProfession = () => {
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
        onChangeText={handleChange('descricao')}
        onBlur={handleBlur('descricao')}
        value={values.descricao}
        error={touched.descricao && errors.descricao}
        autoCapitalize="words"
      />
      <FormLabeledSwitch
        label="Cadastro ativo"
        value={values.situacao}
        onValueChange={(value) => setFieldValue('situacao', value)}
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
