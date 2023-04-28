/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
  const [username, setUsername] = useState('');
  const [year, setYear] = useState<number | null>(null);
  const [dialect, setDialect] = useState<number | null>(null);
  const [gender, setGender] = useState<number | null>(null);
  const [profileUpdatedVisible, setProfileUpdatedVisible] = useState<boolean>(false);
  const { session } = useSession();
  const { profile, setProfile } = useProfile();
  const { dialects, setDialects } = useDialects();
  const { genders, setGenders } = useGenders();
  const [birthYears] = useState(Array.from({ length: 100 }, (value, index) => 1923 + index));
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (session) {
      getProfile(session).then((p) => {
        if (p !== undefined && p.length !== 0) {
          setProfile(p[0]);
          if (p[0].dialect) {
            setDialect(p[0].dialect);
          }
          if (p[0].gender) {
            setGender(p[0].gender);
          }
          if (p[0].year) {
            setYear(p[0].year);
          }
          if (p[0].username) {
            setUsername(p[0].username);
          }
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
      console.log('profile:', profile);
    }
  }, [genders, dialects, profile]);

  const prepareToSetProfile = async () => {
    if (session !== null && profile !== null) {
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
          <AbInfoHeader
            title={t('infoHeader.home.profile.title')}
            description={t('infoHeader.home.profile.description')}
          />
        </Box>
        <CenteredFlexBox m={2}>
          <Box>
            {loading ? (
              'Loading...'
            ) : session ? (
              <Box width={360}>
                <Grid container spacing={0}>
                  <Grid item xs={12} my={1}>
                    <TextField
                      fullWidth
                      id="username"
                      label={t('pages.profile.username')}
                      name="username"
                      placeholder={t('pages.profile.username')}
                      value={
                        profile !== null &&
                        profile.username !== undefined &&
                        profile.username !== null
                          ? profile.username
                          : ''
                      }
                      onChange={(e) => {
                        setUsername(e.target.value);
                        setProfile((profile) => ({
                          ...profile,
                          username: e.target.value,
                        }));
                      }}
                      helperText={
                        username.length !== 0 && username.length < 3
                          ? t('pages.profile.minimumThreeLetters')
                          : ''
                      }
                    />
                  </Grid>
                  <Grid item xs={12} my={1}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {t('pages.profile.birthYear')}
                      </InputLabel>
                      <Select
                        labelId="birth year"
                        id="birth year"
                        value={
                          profile !== null && profile.year !== undefined && profile.year !== null
                            ? profile.year
                            : ''
                        }
                        label={t('pages.profile.birthYear')}
                        onChange={(e) => {
                          setYear(e.target.value as number);
                          setProfile((profile) => ({
                            ...profile,
                            year: e.target.value as number,
                          }));
                        }}
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
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
                      <InputLabel id="demo-simple-select-label">
                        {t('pages.profile.dialect')}
                      </InputLabel>
                      <Select
                        labelId="dialect"
                        id="dialect"
                        value={
                          profile !== null &&
                          profile.dialect !== undefined &&
                          profile.dialect !== null
                            ? profile.dialect
                            : ''
                        }
                        label={t('pages.profile.dialect')}
                        onChange={(e) => {
                          setDialect(e.target.value as number);

                          setProfile((profile) => ({
                            ...profile,
                            dialect: e.target.value as number,
                          }));
                        }}
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                      >
                        {dialects
                          ? dialects.map((d) => (
                              <MenuItem key={d.id} value={d.id}>
                                {t(`pages.profile.${d.name?.toLowerCase()}`)}
                              </MenuItem>
                            ))
                          : ''}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} my={1}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {t('pages.profile.gender')}
                      </InputLabel>
                      <Select
                        labelId="gender"
                        id="gender"
                        value={
                          profile !== null &&
                          profile.gender !== undefined &&
                          profile.gender !== null
                            ? profile.gender
                            : ''
                        }
                        label="gender"
                        onChange={(e) => {
                          setGender(e.target.value as number);

                          setProfile((profile) => ({
                            ...profile,
                            gender: e.target.value as number,
                          }));
                        }}
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                      >
                        {genders
                          ? genders.map((d) => (
                              <MenuItem key={d.id} value={d.id}>
                                {t(`pages.profile.${d.name?.toLowerCase()}`)}
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
                    disabled={
                      loading ||
                      username.length < 3 ||
                      year === null ||
                      gender === null ||
                      dialect === null
                    }
                  >
                    {t(`pages.profile.save`)}
                  </Button>
                </CenteredFlexBox>
                {profile !== null && profile.over_16 === false && (
                  <Box mt={2}>
                    <Typography
                      fontWeight="bold"
                      align="center"
                    >{`Parent/Caregiver Details:`}</Typography>
                    <Typography align="center">{`name: ${profile.parent_caregiver_name}`}</Typography>
                    <Typography align="center">{`email: ${profile.parent_caregiver_email}`}</Typography>
                  </Box>
                )}
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
          {session ? (
            <AbPopup
              title={t('pages.profile.updated')}
              description={t('pages.profile.thanks')}
              condition1=""
              borderColor="primary.main"
              buttons={[{ text: 'ok', color: 'primary' }]}
              onClick={() => {
                setProfileUpdatedVisible(false);
              }}
            />
          ) : (
            <IconButton
              component={Link}
              to="/login"
              size="medium"
              edge="end"
              sx={{ color: 'primary.main' }}
              aria-label="log in"
            >
              <LoginIcon />
            </IconButton>
          )}
        </FullSizeCenteredFlexBox>
      )}
    </HorizontallyCenteredFlexBox>
  );
}

export default Profile;
