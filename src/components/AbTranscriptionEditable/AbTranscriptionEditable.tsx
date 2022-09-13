import { SetterOrUpdater } from 'recoil';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbCorrection from '@/components/AbCorrection';
import AbTranscriptionWord from '@/components/AbTranscriptionWord';
import { correctionModel, transcriptionModel } from '@/models/transcription';
import {
  addToCorrectionsList,
  deleteItemFromCorrectionsList,
  mergeCorrectionObjects,
  splitCorrectionObject,
  updateCorrectionsList,
} from '@/store/transcriptions/utils';

interface AbTranscriptionEditableProps {
  transcription: transcriptionModel;
  corrections: correctionModel[];
  setCorrections: SetterOrUpdater<correctionModel[]>;
}

const AbTranscriptionEditable = ({
  transcription,
  corrections,
  setCorrections,
}: AbTranscriptionEditableProps) => {
  const handleWordClick = (w_index: number) => {
    let selected = false;
    let adjacentRightTo = null;
    let adjacentLeftTo = null;
    corrections.map((c, c_index) => {
      if (w_index >= c.start && w_index <= c.end) {
        selected = true;
        if (c.start === c.end) {
          deleteItemFromCorrectionsList(c_index, corrections, setCorrections);
        } else if (w_index === c.start) {
          updateCorrectionsList(
            c_index,
            w_index + 1,
            c.end,
            c.correction_text,
            corrections,
            setCorrections,
          );
        } else if (w_index === c.end) {
          updateCorrectionsList(
            c_index,
            c.start,
            w_index - 1,
            c.correction_text,
            corrections,
            setCorrections,
          );
        } else {
          splitCorrectionObject(c_index, w_index, corrections, setCorrections);
        }
      } else {
        if (w_index === c.start - 1) {
          adjacentLeftTo = c_index;
        }
        if (w_index === c.end + 1) {
          adjacentRightTo = c_index;
        }
      }
    });
    if (!selected) {
      if (adjacentLeftTo !== null && adjacentRightTo !== null) {
        console.log('merging');
        mergeCorrectionObjects(adjacentLeftTo, adjacentRightTo, corrections, setCorrections);
      } else if (adjacentRightTo !== null) {
        updateCorrectionsList(
          adjacentRightTo,
          corrections[adjacentRightTo].start,
          w_index,
          corrections[adjacentRightTo].correction_text,
          corrections,
          setCorrections,
        );
      } else if (adjacentLeftTo !== null) {
        updateCorrectionsList(
          adjacentLeftTo,
          w_index,
          corrections[adjacentLeftTo].end,
          corrections[adjacentLeftTo].correction_text,
          corrections,
          setCorrections,
        );
      } else {
        addToCorrectionsList(transcription.id, w_index, corrections, setCorrections);
      }
    }
  };

  return (
    <Box>
      <Grid container direction="row">
        {transcription.text.split(' ').map((word, i) => (
          <Grid key={i} item>
            <AbTranscriptionWord
              word={word}
              index={i}
              corrections={corrections}
              handleClick={() => {
                handleWordClick(i);
              }}
            />
          </Grid>
        ))}
      </Grid>

      {corrections.map((c, i) => (
        <AbCorrection
          key={i}
          correction={c}
          incorrectChunk={transcription.text
            .split(' ')
            .slice(c.start, c.end + 1)
            .join(' ')}
          handleClick={() => {
            console.log('hello');
          }}
        />
      ))}
    </Box>
  );
};

export default AbTranscriptionEditable;
