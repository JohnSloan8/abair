import React from 'react';

import Button from '@mui/material/Button';

import styles from './styles';

interface AbButtonProps {
  disabled?: boolean;
  label: string;
  selected: boolean;
  variation: 'voice' | 'alert';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AbButton = ({ onClick, label, selected, disabled = false, variation }: AbButtonProps) => {
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
