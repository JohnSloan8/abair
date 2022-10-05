// import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';

function Applications() {
  return (
    <FullSizeBox>
      <Meta title="AAC" />
      <Box sx={{ backgroundColor: 'primary.main' }} pb={4}>
        <AbInfoHeader title="AAC" color="background.paper" />
        {/* <Box width={'100%'} sx={{ border: '1px solid red' }}> */}
        <CenteredFlexBox>
          <Box maxWidth="md" border={8} borderRadius={2} borderColor={'primary.light'}>
            <Image
              duration={1000}
              height={250}
              width={600}
              easing="ease-out"
              alt="Abair Applications"
              src="https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/applications/AACInterfaceDemo.gif"
              bgColor="#fff"
              showLoading
            />
          </Box>
        </CenteredFlexBox>
        <Typography mt={4} variant={'h6'} align="center" color="background.paper">
          Providing a voice to those without
        </Typography>
      </Box>
      <Box py={4}>
        <CenteredFlexBox>
          <Typography variant={'h5'} align="center">
            What is AAC?
          </Typography>
        </CenteredFlexBox>
        <CenteredFlexBox mt={4}>
          <Box maxWidth="md">
            <Typography align="center">AAC is...</Typography>
            <Typography align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </Typography>
          </Box>
        </CenteredFlexBox>
      </Box>
      <Box py={4} sx={{ backgroundColor: 'primary.wafer' }}>
        <CenteredFlexBox>
          <Box maxWidth="md">
            <Typography align="center" variant={'h5'}>
              Watch it in Action
            </Typography>
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox py={4}>
          <video width="500" controls>
            <source src="https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/applications/AACdemo.mov" />
            Your browser does not support the video tag.
          </video>
        </CenteredFlexBox>
      </Box>
      <Box py={4}>
        <CenteredFlexBox>
          <Typography variant={'h5'} align="center">
            Project Details
          </Typography>
        </CenteredFlexBox>
        <CenteredFlexBox mt={4}>
          <Box maxWidth="md">
            <Typography align="center">Details of project...</Typography>
            <Typography align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </Typography>
          </Box>
        </CenteredFlexBox>
      </Box>
      <Box py={4} sx={{ backgroundColor: 'primary.wafer' }}>
        <CenteredFlexBox>
          <Typography variant={'h5'} align="center">
            Contact
          </Typography>
        </CenteredFlexBox>
        <CenteredFlexBox mt={4}>
          <Box maxWidth="md">
            <Typography align="center">Julie Mhic Con Iomaire</Typography>
            <Typography variant="body2" align="center">
              juliemhicconiomaire@gmail.com
            </Typography>
          </Box>
        </CenteredFlexBox>
      </Box>
    </FullSizeBox>
  );
}

export default Applications;
