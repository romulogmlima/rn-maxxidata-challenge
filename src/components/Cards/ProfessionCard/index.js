import React from 'react';

import {
  Badge,
  BadgeLabel,
  Card,
  ContainerActions,
  ContainerDeleteButton,
  ContainerEditButton,
  Description,
  Footer,
  Header,
  Icon,
} from './styles';

const ProfessionCard = ({ item, onPressDelete, onPressEdit }) => (
  <Card>
    <Header>
      <Description>{item.description}</Description>
      <ContainerActions>
        <ContainerEditButton onPress={onPressEdit}>
          <Icon name="account-edit" />
        </ContainerEditButton>
        <ContainerDeleteButton onPress={onPressDelete}>
          <Icon name="delete" />
        </ContainerDeleteButton>
      </ContainerActions>
    </Header>
    <Footer>
      <Badge isActive={item.status}>
        <BadgeLabel>Cadastro {item.status ? 'Ativo' : 'Inativo'}</BadgeLabel>
      </Badge>
    </Footer>
  </Card>
);

export default ProfessionCard;
