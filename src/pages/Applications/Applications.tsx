import { Grid } from '@mui/material';

import { AbClickableCard } from 'abair-component-library';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';

function Applications() {
  return (
    <>
      <Meta title="applications" />
      <AbInfoHeader title="Applications" />
      <Grid
        container
        direction="row"
        spacing={1}
        px={1}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <AbClickableCard
            handleClickEvent={() => {
              window.location.href = 'https://abair.ie/scealai';
            }}
            title="An Scéalaí"
            description="Computer Assisted Language Learning platform"
            variation="app"
            image="/assets/images/misc/scealai-image.png"
          />
        </Grid>
        <Grid item>
          <AbClickableCard
            path="/applications"
            title="Leon don Lón"
            description="Pronunciation exercises"
            variation="app"
          />
        </Grid>
        <Grid item>
          <AbClickableCard
            path="/applications"
            title="AAC"
            description="Augmentative and Alternative Communication"
            variation="app"
          />
        </Grid>
        <Grid item>
          <AbClickableCard
            path="/applications"
            title="LARA"
            description="Interactive Digital Storybooks"
            variation="app"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Applications;
