import React from 'react';
import { ModalButton, PlusIcon } from './TrainingOpenModalButton.styled';

const OpenModalButton = ({ openModal }) => {
  return (
    <ModalButton onClick={openModal}>
      <PlusIcon fontSize="32" />
    </ModalButton>
  );
};

export default OpenModalButton;
