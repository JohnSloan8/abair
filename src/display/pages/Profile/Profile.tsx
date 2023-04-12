/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { AbPopup } from 'abair-components';
// import Typography from '@mui/material/Typography';
import { AbInfoHeader } from 'abair-components';

import { domain } from '@/config';
import Meta from '@/display/sections/Meta';
import {
  CenteredFlexBox,
  FullSizeCenteredFlexBox,
  HorizontallyCenteredFlexBox,
} from '@/display/utils/flex';
import { getDialects } from '@/services/supabase/dialects';
import { getGenders } from '@/services/supabase/genders';
import { getProfile, updateProfile } from '@/services/supabase/profile';
import { useSession } from '@/store/auth';
import { useDialects, useGenders, useProfile } from '@/store/profile';

function Profile() {
  const [loading, setLoading] = useState<boolean>(true);
  const [profileUpdatedVisible, setProfileUpdatedVisible] = useState<boolean>(false);
  const { session } = useSession();
  const { profile, setProfile } = useProfile();
  const { dialects, setDialects } = useDialects();
  const { genders, setGenders } = useGenders();
  const [birthYears] = useState(Array.from({ length: 100 }, (value, index) => 1923 + index));
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      getProfile(session).then((p) => {
        if (p !== undefined && p.length !== 0) {
          setProfile(p[0]);
        } else {
          console.log('no profile');
        }
      });
    } else {
      if (searchParams.get('origin') !== null) {
        navigate(`/login?origin=${searchParams.get('origin')}`);
      } else {
        navigate(`/login`);
      }
    }

    if (dialects === undefined) {
      getDialects().then((d) => {
        if (d !== undefined) {
          setDialects(d);
        }
      });
    }

    if (genders === undefined) {
      getGenders().then((g) => {
        if (g !== undefined) {
          setGenders(g);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (genders !== undefined && dialects !== undefined && profile !== undefined) {
      setLoading(false);
    }
  }, [genders, dialects, profile]);

  const prepareToSetProfile = async () => {
    if (session !== null) {
      setLoading(true);
      updateProfile(profile).then(() => {
        setLoading(false);

        if (searchParams.get('origin')) {
          window.location.href = `${domain}/${searchParams.get('origin')}`;
        } else {
          setProfileUpdatedVisible(true);
        }
      });
    } else {
      alert('not logged in');
    }
  };

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title="Profile & Consent" />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title="Profile" />
        </Box>
        <CenteredFlexBox m={2}>
          <Box>
            {loading ? (
              'Loading...'
            ) : session ? (
              <Box>
                <Grid container spacing={0}>
                  <Grid item xs={12} my={1}>
                    <TextField
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      placeholder="Your username"
                      value={
                        profile.username !== undefined && profile.username !== null
                          ? profile.username
                          : ''
                      }
                      onChange={(e) => {
                        setProfile((profile) => ({
                          ...profile,
                          username: e.target.value,
                        }));
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} my={1}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Birth Year</InputLabel>
                      <Select
                        labelId="birth year"
                        id="birth year"
                        value={
                          profile.year !== undefined && profile.year !== null ? profile.year : ''
                        }
                        label="dialect"
                        onChange={(e) => {
                          setProfile((profile) => ({
                            ...profile,
                            year: e.target.value as number,
                          }));
                        }}
                      >
                        {birthYears
                          ? birthYears.map((d) => (
                              <MenuItem key={d} value={d}>
                                {d}
                              </MenuItem>
                            ))
                          : ''}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} my={1}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Dialect</InputLabel>
                      <Select
                        labelId="dialect"
                        id="dialect"
                        value={
                          profile.dialect !== undefined && profile.dialect !== null
                            ? profile.dialect
                            : ''
                        }
                        label="dialect"
                        onChange={(e) => {
                          setProfile((profile) => ({
                            ...profile,
                            dialect: e.target.value as number,
                          }));
                        }}
                      >
                        {dialects
                          ? dialects.map((d) => (
                              <MenuItem key={d.id} value={d.id}>
                                {d.name}
                              </MenuItem>
                            ))
                          : ''}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} my={1}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                      <Select
                        labelId="gender"
                        id="gender"
                        value={
                          profile.gender !== undefined && profile.gender !== null
                            ? profile.gender
                            : ''
                        }
                        label="gender"
                        onChange={(e) => {
                          setProfile((profile) => ({
                            ...profile,
                            gender: e.target.value as number,
                          }));
                        }}
                      >
                        {genders
                          ? genders.map((d) => (
                              <MenuItem key={d.id} value={d.id}>
                                {d.name}
                              </MenuItem>
                            ))
                          : null}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <CenteredFlexBox sx={{ width: '100%' }}>
                  <Button
                    onClick={prepareToSetProfile}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={loading}
                  >
                    Update profile
                  </Button>
                </CenteredFlexBox>
              </Box>
            ) : (
              <p>not logged in</p>
            )}
          </Box>
        </CenteredFlexBox>
      </Box>
      {profileUpdatedVisible && (
        <FullSizeCenteredFlexBox
          sx={{ zIndex: 9999, position: 'fixed', top: '0', backgroundColor: 'rgba(0,0,0,0.3)' }}
        >
          <AbPopup
            title="Profile Updated"
            description="Thank you for providing this information :-)"
            condition1=""
            borderColor="primary.main"
            buttons={[{ text: 'ok', color: 'primary' }]}
            onClick={() => {
              setProfileUpdatedVisible(false);
            }}
          />
        </FullSizeCenteredFlexBox>
      )}
    </HorizontallyCenteredFlexBox>
  );
}

export default Profile;
