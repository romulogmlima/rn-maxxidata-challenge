import React from 'react';

import {
  Badge,
  BadgeLabel,
  ContactInformationContainer,
  Card,
  ContainerDeleteButton,
  ContainerEditButton,
  Footer,
  Header,
  Icon,
  Name,
  Profession,
  ContainerActions,
} from './styles';

const ProfessionalCard = ({ item, onPressDelete, onPressEdit }) => {
  return (
    <Card>
      <Header>
        <Name>{item.fullName}</Name>
        <ContainerActions>
          <ContainerEditButton onPress={onPressEdit}>
            <Icon name="account-edit" />
          </ContainerEditButton>
          <ContainerDeleteButton onPress={onPressDelete}>
            <Icon name="delete" />
          </ContainerDeleteButton>
        </ContainerActions>
      </Header>

      <Profession>{item?.profession.description}</Profession>
      <ContactInformationContainer>
        <Profession>{`E-mail: ${
          item.email ? item.email : 'Não informado'
        }`}</Profession>
        <Profession>{`Telefone: ${
          item.phoneNumber ? item.phoneNumber : 'Não informado'
        }`}</Profession>
      </ContactInformationContainer>
      <Footer>
        <Badge isActive={item.status}>
          <BadgeLabel> Cadastro {item.status ? 'Ativo' : 'Inativo'}</BadgeLabel>
        </Badge>
      </Footer>
    </Card>
  );
};

export default ProfessionalCard;
