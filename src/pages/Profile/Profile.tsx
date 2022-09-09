/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

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

  const prepareToUpdateProfile = (e) => {
    e.preventDefault();
    console.log('dialects:', dialects);
    const updatedDialect = dialects.filter((d) => d.name === profile.dialect)[0];
    const updatedGender = genders.filter((g) => g.name === profile.gender)[0];
    console.log('updatedDialect:', updatedDialect);
    updateProfile(session, profile, updatedDialect, updatedGender);
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
              <form onSubmit={(e) => prepareToUpdateProfile(e)} className="form-widget">
                <div>Email: {session.user.email}</div>
                <div>Birth Year: {profile.year}</div>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    value={profile ? profile.username : ''}
                    onChange={(e) => {
                      setProfile((profile) => ({ ...profile, username: e.target.value }));
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="dialect">Dialect</label>
                  <select
                    id="dialect"
                    name="dialect"
                    value={profile ? profile.dialect : ''}
                    onChange={(e) =>
                      setProfile((profile) => ({ ...profile, dialect: e.target.value }))
                    }
                  >
                    {dialects
                      ? dialects.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
                <div>
                  <label htmlFor="dialect">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={profile ? profile.gender : ''}
                    onChange={(e) =>
                      setProfile((profile) => ({ ...profile, gender: e.target.value }))
                    }
                  >
                    {genders
                      ? genders.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name}
                          </option>
                        ))
                      : null}
                  </select>
                </div>
                <div>
                  <button className="button primary block" disabled={loading}>
                    Update profile
                  </button>
                </div>
              </form>
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
