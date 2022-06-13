import React from 'react';

import {
  Badge,
  BadgeLabel,
  Container,
  ContainerDeleteButton,
  ContainerEditButton,
  Header,
  Icon,
  Name,
} from './styles';

const ProfessionalCard = ({ item, onPressDelete, onPressEdit }) => (
  <Container>
    <Header>
      <Name>{item.nome}</Name>
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

export default ProfessionalCard;
