import { useFormik } from 'formik';
import React from 'react';
import { ScrollView } from 'react-native';

import Button from '../../components/Buttons/Button';
import FormLabeledSwitch from '../../components/FormLabeledSwitch';
import Input from '../../components/Input';
import MaskedInput from '../../components/MaskedInput';
import Picker from '../../components/Picker';
import Wrapper from '../../components/Wrapper';
import { validationSchema } from '../../validations';

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
    validationSchema,
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
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Input
          label="Nome completo *"
          placeholder="Maria da Silva"
          onChangeText={handleChange('nome')}
          onBlur={handleBlur('nome')}
          value={values.nome}
          error={touched.nome && errors.nome}
          autoCapitalize="words"
        />
        <MaskedInput
          label="Telefone"
          placeholder="(XX) XXXXX-XXXX"
          onChangeText={handleChange('telefone')}
          onBlur={handleBlur('telefone')}
          value={values.telefone}
          error={touched.telefone && errors.telefone}
          keyboardType="numeric"
          type="cel-phone"
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
        />
        <Input
          label="E-mail"
          placeholder="email@email.com"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          error={touched.email && errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Picker
          label="Profissão"
          onValueChange={(value) => setFieldValue('tipoDeProfissional', value)}
          error={touched.tipoDeProfissional && errors.tipoDeProfissional}
          placeholder={{ label: 'Selecionar', value: '', key: 0 }}
          items={[
            { label: 'Médico', value: 'Médico', key: 1 },
            {
              label: 'Desenvolvedor de Sistemas',
              value: 'Desenvolvedor de Sistemas',
              key: 2,
            },
            { label: 'Motorista', value: 'Motorista', key: 3 },
          ]}
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
      </ScrollView>
    </Wrapper>
  );
};

export default RegisterProfessional;
