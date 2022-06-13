import React from 'react';

import { Content, CustomModal } from './styles';

const Dialog = ({ children, visible, onBackdropPress }) => (
  <CustomModal isVisible={visible} onBackdropPress={onBackdropPress}>
    <Content>{children}</Content>
  </CustomModal>
);

export default Dialog;
