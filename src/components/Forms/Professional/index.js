import { useFormik } from 'formik';
import React, { useEffect, useMemo } from 'react';
import { ScrollView } from 'react-native';

import useProfession from '../../../hooks/useProfession';
import { schemaFormProfessional } from '../../../validations';
import BasicButton from '../../Buttons/BasicButton';
import BasicInput from '../../Inputs/BasicInput';
import MaskedInput from '../../Inputs/MaskedInput';
import LabeledSwitch from '../../LabeledSwitch';
import Picker from '../../Picker';

const FormProfessional = ({ initialValues, onSubmit, submitButtonTitle }) => {
  const { listProfessions, findAll } = useProfession();

  useEffect(() => {
    findAll();
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: schemaFormProfessional,
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

  const filteredlistProfessions = useMemo(() => {
    return listProfessions
      .filter((item) => item.status)
      .map((item) => {
        return {
          label: item.description,
          value: item.id,
          key: item.id,
        };
      });
  }, [listProfessions]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <BasicInput
        label="Nome completo *"
        placeholder="Maria da Silva"
        onChangeText={handleChange('fullName')}
        onBlur={handleBlur('fullName')}
        value={values.fullName}
        error={touched.fullName && errors.fullName}
        autoCapitalize="words"
      />
      <MaskedInput
        label="Telefone"
        placeholder="(XX) XXXXX-XXXX"
        onChangeText={handleChange('phoneNumber')}
        onBlur={handleBlur('phoneNumber')}
        value={values.phoneNumber}
        error={touched.phoneNumber && errors.phoneNumber}
        keyboardType="numeric"
        type="cel-phone"
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
      />
      <BasicInput
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
        value={values.professionId}
        label="Profissão *"
        onValueChange={(value) => setFieldValue('professionId', value)}
        error={touched.professionId && errors.professionId}
        placeholder={{ label: 'Selecionar', value: '', key: 0 }}
        items={filteredlistProfessions}
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

export default FormProfessional;
