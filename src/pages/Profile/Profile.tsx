/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

// import Typography from '@mui/material/Typography';
import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { getDialects } from '@/services/supabase/dialects';
import { getGenders } from '@/services/supabase/genders';
import { getProfile, updateProfile } from '@/services/supabase/profile';
import { useSession } from '@/store/auth';
import { useDialects, useGenders, useProfile } from '@/store/profile';

function Profile() {
  const [loading, setLoading] = useState<boolean>(true);
  const { session } = useSession();
  const { profile, setProfile } = useProfile();
  const { dialects, setDialects } = useDialects();
  const { genders, setGenders } = useGenders();
  const navigate = useNavigate();

  useEffect(() => {
    session ? getProfile(session, setProfile, setLoading) : navigate('/login');

    dialects === undefined ? getDialects(setDialects) : null;
    genders === undefined ? getGenders(setGenders) : null;
  }, []);

  const prepareToUpdateProfile = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    console.log('dialects:', dialects);
    const updatedDialect = dialects.filter((d) => d.name === profile.dialect)[0];
    const updatedGender = genders.filter((g) => g.name === profile.gender)[0];
    console.log('updatedDialect:', updatedDialect);
    await updateProfile(session, profile, updatedDialect, updatedGender);
    console.log('profile updated');
    setLoading(false);
  };

  return (
    <CenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title="Profile" />
        <AbInfoHeader title="Profile" />
        <CenteredFlexBox m={2}>
          <div aria-live="polite">
            {loading ? (
              'Loading...'
            ) : session ? (
              <Box
                component="form"
                noValidate
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  prepareToUpdateProfile(e);
                }}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={0}>
                  <Grid item xs={12} my={1}>
                    <TextField
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      placeholder="Your username"
                      value={profile ? profile.username : ''}
                      onChange={(e) => {
                        setProfile((profile) => ({ ...profile, username: e.target.value }));
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} my={1}>
                    <TextField
                      fullWidth
                      id="year of birth"
                      label="Year of Birth"
                      name="year of birth"
                      autoComplete="year of birth"
                      type="year of birth"
                      placeholder="Your year of birth"
                      value={profile ? profile.year : ''}
                      onChange={(e) => {
                        setProfile((profile) => ({ ...profile, year: parseInt(e.target.value) }));
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} my={1}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Dialect</InputLabel>
                      <Select
                        labelId="dialect"
                        id="dialect"
                        value={profile ? profile.dialect : ''}
                        label="dialect"
                        onChange={(e) =>
                          setProfile((profile) => ({ ...profile, dialect: e.target.value }))
                        }
                      >
                        {dialects
                          ? dialects.map((d) => (
                              <MenuItem key={d.id} value={d.name}>
                                {d.name}
                              </MenuItem>
                            ))
                          : null}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} my={1}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                      <Select
                        labelId="gender"
                        id="gender"
                        value={profile ? profile.gender : ''}
                        label="gender"
                        onChange={(e) =>
                          setProfile((profile) => ({ ...profile, gender: e.target.value }))
                        }
                      >
                        {genders
                          ? genders.map((d) => (
                              <MenuItem key={d.id} value={d.name}>
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
                    type="submit"
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
          </div>
        </CenteredFlexBox>
      </Box>
    </CenteredFlexBox>
  );
}

export default Profile;
