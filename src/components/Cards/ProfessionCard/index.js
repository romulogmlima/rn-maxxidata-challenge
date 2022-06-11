import React from 'react';

import { Badge, BadgeLabel, Container, Description } from './styles';

const ProfessionCard = ({ item }) => (
  <Container>
    <Description>{item.descricao}</Description>
    <Badge isActive>
      <BadgeLabel>Ativo</BadgeLabel>
    </Badge>
  </Container>
);

export default ProfessionCard;
