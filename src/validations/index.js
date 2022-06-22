import * as Yup from 'yup';

export const schemaFormProfessional = Yup.object({
  fullName: Yup.string()
    .label('fullName')
    .required('Campo obrigatório')
    .min(3, 'Número mínimo de caracteres: 3')
    .max(60, 'Número máximo de caracteres: 60'),
  phoneNumber: Yup.string()
    .label('phoneNumber')
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
      'Informe todos os dígitos do telefone'
    ),
  email: Yup.string().label('email').email('Informe um e-mail válido'),
  professionId: Yup.string()
    .label('professionId')
    .required('Campo obrigatório'),
});

export const schemaFormProfession = Yup.object({
  description: Yup.string()
    .label('description')
    .required('Campo obrigatório')
    .min(5, 'Número mínimo de caracteres: 5')
    .max(50, 'Número máximo de caracteres: 50'),
});
