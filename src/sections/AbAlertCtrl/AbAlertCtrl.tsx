import { useNavigate } from 'react-router-dom';

import AbAlert from '@/components/AbAlert';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { useAlert } from '@/store/alert';

interface AbAlertCtrlProps {
  description: string;
  goTo?: string;
}

const AbAlertCtrl = ({ description, goTo }: AbAlertCtrlProps) => {
  const { alert, setAlert } = useAlert();
  const navigate = useNavigate();

  const onClickAlert = () => {
    setAlert(false);
    goTo !== undefined ? navigate(goTo) : null;
  };

  return alert ? (
    <FullSizeCenteredFlexBox
      onClick={onClickAlert}
      sx={{ zIndex: 9999, position: 'absolute', top: '0', backgroundColor: 'rgba(0,0,0,0.3)' }}
    >
      <AbAlert description={description} handleClick={onClickAlert} />
    </FullSizeCenteredFlexBox>
  ) : null;
};

export default AbAlertCtrl;
