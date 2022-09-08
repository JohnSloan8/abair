/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { supabase } from '@/services/supabase';
import { useSession } from '@/store/auth';

function Profile() {
  const [loading, setLoading] = useState(true);
  const [dialect, setDialect] = useState(null);
  const [year, setYear] = useState(null);
  const [gender, setGender] = useState(null);
  const [username, setUsername] = useState('');
  const { session } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    session ? getProfile() : navigate('/login');
  }, []);

  const getProfile = async () => {
    try {
      setLoading(true);
      const { user } = session;

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, dialect, gender, year`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      } else {
        console.log('error:', error);
      }

      if (data) {
        setUsername(data.username);
        setDialect(data.dialect);
        setYear(data.year);
        setGender(data.gender);
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user } = session;

      const updates = {
        id: user.id,
        username,
        dialect,
        gender,
        year,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
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
              <form onSubmit={updateProfile} className="form-widget">
                <div>Email: {session.user.email}</div>
                <div>Birth Year: {year}</div>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="dialect">Dialect</label>
                  <input
                    id="dialect"
                    type="number"
                    value={dialect || ''}
                    onChange={(e) => setDialect(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="dialect">Gender</label>
                  <input
                    id="gender"
                    type="number"
                    value={gender || ''}
                    onChange={(e) => setGender(e.target.value)}
                  />
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
