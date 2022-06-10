import React from 'react';

import { Badge, BadgeLabel, Container, Header, Label, Name } from './styles';

const ProfessionalCard = ({ item }) => (
  <Container>
    <Header>
      <Name>{item.nome}</Name>
      <Badge isActive>
        <BadgeLabel>Ativo</BadgeLabel>
      </Badge>
    </Header>
  </Container>
);

export default ProfessionalCard;
