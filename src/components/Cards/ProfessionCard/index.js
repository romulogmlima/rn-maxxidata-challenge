import React from 'react';

import {
  Badge,
  BadgeLabel,
  Container,
  ContainerDeleteButton,
  ContainerEditButton,
  Description,
  Header,
  Icon,
} from './styles';

const ProfessionCard = ({ item, onPressDelete, onPressEdit }) => (
  <Container>
    <Header>
      <Description>{item.descricao}</Description>
      <Badge isActive={item.situacao}>
        <BadgeLabel>{item.situacao ? 'Ativo' : 'Inativo'}</BadgeLabel>
      </Badge>
    </Header>
    <ContainerDeleteButton onPress={onPressDelete}>
      <Icon name="delete" />
    </ContainerDeleteButton>
    <ContainerEditButton onPress={onPressEdit}>
      <Icon name="square-edit-outline" />
    </ContainerEditButton>
  </Container>
);

export default ProfessionCard;
