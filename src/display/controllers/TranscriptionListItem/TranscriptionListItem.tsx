import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AbIconButton } from 'abair-components';
import { AbInteractionContainer } from 'abair-components';

// import Recognition from '@/display/sections/Recognition';
import RecognitionButtons from '@/display/controllers/RecognitionButtons';
import RecognitionTextField from '@/display/controllers/RecognitionTextField/RecognitionTextField';
import { transcriptionModel } from '@/models/transcription';
import deleteTranscription from '@/services/supabase/transcriptions/deleteTranscription';
import { useTranscription, useTranscriptions } from '@/store/transcriptions';
import { useBreakpointSize } from '@/store/viewDimensions';
import { CenteredFlexBox } from '@/utils/flex';

interface TranscriptionListItemProps {
  trans: transcriptionModel;
}

const TranscriptionListItem = ({ trans }: TranscriptionListItemProps) => {
  const { transcription, setTranscription } = useTranscription();
  const { transcriptions, setTranscriptions } = useTranscriptions();
  const { breakpointSize } = useBreakpointSize();

  const handleClick = (t: transcriptionModel) => {
    if (transcription?.id !== t.id) {
      setTranscription(t);
    } else {
      setTranscription(undefined);
    }
  };

  const handleDelete = (id: number | undefined) => {
    id !== undefined
      ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
        deleteTranscription(id).then((res) => {
          setTranscriptions(transcriptions.filter((t: transcriptionModel) => t.id !== id));
        })
      : alert("can't delete undefined");
  };

  return (
    <Accordion
      expanded={trans.id === transcription?.id ? true : false}
      elevation={0}
      sx={{
        borderRadius: 3,
        border: 1,
        borderColor: 'warning.light',
        py: 0,
        backgroundColor: 'warning.wafer',
        color: '#000',
      }}
      onChange={() => {
        handleClick(trans);
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Box>{`"${
          trans.correction
            ? trans.correction
            : trans.recognition_response[0].utterance.replaceAll('\n', ' - ')
        }"`}</Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box mt={-1} mb={2}>
          {trans.recognition_response
            .map(({ utterance }) => utterance)
            .map((t, i) => (
              <Box key={i}>
                <Typography>
                  model {i + 1}. &quot;<i>{t.replaceAll('\n', ' - ')}</i>&quot;
                </Typography>
              </Box>
            ))}
        </Box>
        <AbInteractionContainer
          textbox={<RecognitionTextField rows={breakpointSize === 'xs' ? 3 : 4} />}
          buttons={<RecognitionButtons showRecord={false} />}
          color="warning.light"
        />
      </AccordionDetails>
      <CenteredFlexBox>
        <AbIconButton
          color="info"
          onClick={() => {
            handleDelete(trans.id);
          }}
          icon={DeleteIcon}
        />
      </CenteredFlexBox>
    </Accordion>
  );
};

export default TranscriptionListItem;
