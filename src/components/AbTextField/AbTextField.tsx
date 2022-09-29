import TextField from '@mui/material/TextField';

interface AbTextFieldProps {
  label: string;

  rows: number;
  disabled: boolean;
  autoFocus: boolean;
  getter: string;
  onChangeHandler: (text: string) => void;
}

const AbTextField = ({
  label,
  rows,
  disabled,
  autoFocus,
  getter,
  onChangeHandler,
}: AbTextFieldProps) => {
  return (
    <TextField
      sx={{ backgroundColor: 'background.default' }}
      onChange={(e) => onChangeHandler(e.target.value)}
      id={label}
      label={label}
      multiline
      rows={rows}
      value={getter}
      autoFocus={autoFocus}
      disabled={disabled}
      fullWidth
    />
  );
};

export default AbTextField;
