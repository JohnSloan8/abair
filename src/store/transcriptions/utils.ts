import { SetterOrUpdater } from 'recoil';

import { correctionModel, transcriptionModel } from '@/models/transcription';

const updateTranscriptionsList = (
  correct: boolean,
  transcription: transcriptionModel,
  listOfTranscriptions: transcriptionModel[],
  setter: SetterOrUpdater<transcriptionModel[]>,
) => {
  const index = listOfTranscriptions.findIndex(
    (listItem: transcriptionModel) => listItem.id === transcription.id,
  );
  setter([
    ...listOfTranscriptions.slice(0, index),
    { ...transcription, correct: correct },
    ...listOfTranscriptions.slice(index + 1),
  ]);
};

const updateCorrectionsList = (
  correctionIndex: number,
  start: number,
  end: number,
  correction_text: string,
  listOfCorrections: correctionModel[],
  setter: SetterOrUpdater<correctionModel[]>,
) => {
  setter([
    ...listOfCorrections.slice(0, correctionIndex),
    {
      ...listOfCorrections[correctionIndex],
      start: start,
      end: end,
      correction_text: correction_text,
    },
    ...listOfCorrections.slice(correctionIndex + 1),
  ]);
};

const deleteItemFromCorrectionsList = (
  correctionIndex: number,
  listOfCorrections: correctionModel[],
  setter: SetterOrUpdater<correctionModel[]>,
) => {
  setter([
    ...listOfCorrections.slice(0, correctionIndex),
    ...listOfCorrections.slice(correctionIndex + 1),
  ]);
};

const splitCorrectionObject = (
  correctionIndex: number,
  wordIndex: number,
  listOfCorrections: correctionModel[],
  setter: SetterOrUpdater<correctionModel[]>,
) => {
  setter([
    ...listOfCorrections.slice(0, correctionIndex),
    {
      ...listOfCorrections[correctionIndex],
      start: listOfCorrections[correctionIndex].start,
      end: wordIndex - 1,
      correction_text: '',
    },
    {
      ...listOfCorrections[correctionIndex],
      start: wordIndex + 1,
      end: listOfCorrections[correctionIndex].end,
      correction_text: '',
    },
    ...listOfCorrections.slice(correctionIndex + 1),
  ]);
};

const mergeCorrectionObjects = (
  adjacentLeftTo: number,
  adjacentRightTo: number,
  listOfCorrections: correctionModel[],
  setter: SetterOrUpdater<correctionModel[]>,
) => {
  setter([
    ...listOfCorrections.slice(0, adjacentLeftTo - 1),
    {
      ...listOfCorrections[adjacentRightTo],
      start: listOfCorrections[adjacentRightTo].start,
      end: listOfCorrections[adjacentLeftTo].end,
      correction_text: '',
    },

    ...listOfCorrections.slice(adjacentLeftTo + 1),
  ]);
};

const addToCorrectionsList = (
  transcriptionID: number,
  correctionIndex: number,
  listOfCorrections: correctionModel[],
  setter: SetterOrUpdater<correctionModel[]>,
) => {
  setter([
    ...listOfCorrections,
    {
      id: null,
      transcription_id: transcriptionID,
      start: correctionIndex,
      end: correctionIndex,
      correction_text: '',
    },
  ]);
};

export {
  updateTranscriptionsList,
  updateCorrectionsList,
  deleteItemFromCorrectionsList,
  splitCorrectionObject,
  mergeCorrectionObjects,
  addToCorrectionsList,
};
