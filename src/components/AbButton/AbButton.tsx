import React from 'react';

import Button from '@mui/material/Button';

import styles from './styles';

interface AbButtonProps {
  disabled?: boolean;
  label: string;
  selected: boolean;
  variation: 'voice';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AbButton = ({ onClick, label, selected, disabled, variation = 'voice' }: AbButtonProps) => {
  const style = styles[variation];

  return (
    <Button
      variant={selected ? 'contained' : 'outlined'}
      disabled={disabled}
      onClick={onClick}
      color={style.color}
    >
      {label}
    </Button>
  );
};

export default AbButton;
