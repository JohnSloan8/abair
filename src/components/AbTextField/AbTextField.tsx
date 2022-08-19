import TextField from '@mui/material/TextField';

import CreateItem from './styles';

interface AbTextFieldProps {
  variation: 'synthesis' | 'recognition';
}

const AbTextField = ({ variation }: AbTextFieldProps) => {
  const styles = CreateItem();
  const style = styles[variation];

  return (
    <TextField
      sx={{ backgroundColor: 'white', mt: 0 }}
      onChange={(e) => style.setter(e.target.value)}
      id="outlined-multiline-static"
      label={style.label}
      multiline
      rows={style.rows}
      value={style.getter}
      autoFocus={style.autoFocus}
      disabled={style.disabled}
      fullWidth
    />
  );
};

export default AbTextField;
