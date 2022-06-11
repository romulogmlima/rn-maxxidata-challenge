import { useFormik } from 'formik';
import React from 'react';

import Input from '../../components/Input';
import Wrapper from '../../components/Wrapper';

const initialValues = {
  nome: '',
  telefone: '',
  email: '',
  tipoDeProfissional: '',
  situacao: true,
};

const RegisterProfessional = () => {
  const onSubmit = (values) => {
    console.log('VALUES: ', values);
  };

  const formik = useFormik({
    initialValues,
    //validationSchema,
    onSubmit,
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    isSubmitting,
    isValid,
    handleSubmit,
  } = formik;

  return (
    <Wrapper>
      <Input
        label="Nome completo *"
        placeholder="Maria da Silva"
        autoCapitalize="words"
        onChangeText={handleChange('nome')}
        value={values.nome}
        error={touched.nome && errors.nome}
      />
      <Input
        label="Telefone"
        placeholder="(XX) XXXXX-XXXX"
        onChangeText={handleChange('telefone')}
        value={values.telefone}
        error={touched.telefone && errors.telefone}
        keyboardType="numeric"
      />
      <Input
        label="E-mail"
        placeholder="email@email.com"
        autoCapitalize="none"
        onChangeText={handleChange('email')}
        value={values.email}
        error={touched.email && errors.email}
        keyboardType="email-address"
      />
    </Wrapper>
  );
};

export default RegisterProfessional;

//Nome
//Telefone
//Email

//Tipo
//Situação

//label, placeholder, value, onChangeText, error
