/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import DownloadIcon from '@mui/icons-material/Download';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

import { AbIconButton, AbInfoHeader } from 'abair-components';

// import { domain } from '@/config';
import Consent from '@/display/controllers/Consent';
import ConsentChild from '@/display/controllers/ConsentChild';
import ConsentParent from '@/display/controllers/ConsentParent';
import InformationSheet from '@/display/controllers/InformationSheet';
import Meta from '@/display/sections/Meta';
import ParentConsentForm from '@/display/sections/ParentConsentForm';
import SignUpForm from '@/display/sections/SignUpForm';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import supabase from '@/services/supabase';
import { createProfile } from '@/services/supabase/profile';
import {
  useAdultConsentOK,
  useChildConsentOK,
  useEmailPasswordOK,
  useParentConsentOK,
  useParentEmailNameOK,
} from '@/store/auth';
import { useProfile } from '@/store/profile';

function SignUp() {
  const { emailPasswordOK } = useEmailPasswordOK();
  const { adultConsentOK } = useAdultConsentOK();
  const { parentConsentOK } = useParentConsentOK();
  const { childConsentOK } = useChildConsentOK();
  const { parentEmailNameOK } = useParentEmailNameOK();

  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const [group, setGroup] = useState('');

  const [email, setEmail] = useState('');
  const [emailAlreadyUsedError, setEmailAlreadyUsedError] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const { setProfile } = useProfile();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    setLoading(false);
    if (error) {
      console.log('error', error.message);
      if (error.message === 'User already registered') {
        setEmailAlreadyUsedError(true);
      }
    } else {
      if (data.user !== null) {
        setEmailAlreadyUsedError(false);
        console.log(data.user);
        createProfile(data.user.id, group, parentName, parentEmail).then((p) => {
          if (p !== undefined) {
            setProfile(p);
          }
        });
        if (searchParams.get('origin') !== null) {
          navigate(`/profile?origin=${searchParams.get('origin')}`, { replace: true });
        } else {
          navigate(`/profile`, { replace: true });
        }
      }
    }
  };

  const downloadInfoSheet = async (filename: string) => {
    const { data, error } = await supabase.storage
      .from('public/abair-bucket')
      .download('information-sheets/' + filename + '.pdf');
    if (error) {
      console.log(error.message);
    } else if (data) {
      console.log('data:', data);
      const blob = data;
      const link = document.createElement('a');
      // create a blobURI pointing to our Blob
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.append(link);
      link.click();
      link.remove();
    }
  };

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ maxWidth: 'md', width: '100%' }}>
        <Meta title={t('pageTitles.signUp')} />

        <Box pt={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pages.auth.signup')} />
        </Box>

        <CenteredFlexBox>
          {loading ? (
            'Processing...'
          ) : (
            <Box width={'100%'}>
              <Box p={1}>
                <CenteredFlexBox>
                  <Typography mr={2} variant="h6" align="center">
                    {t('pages.auth.iAm')}
                  </Typography>

                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      row
                      onChange={(e) => {
                        setGroup(e.target.value);
                      }}
                      value={group}
                    >
                      <FormControlLabel
                        value="over 16"
                        control={<Radio />}
                        label={t('pages.auth.over16')}
                      />
                      <FormControlLabel
                        value="under 16"
                        control={<Radio />}
                        label={t('pages.auth.under16')}
                      />
                    </RadioGroup>
                  </FormControl>
                </CenteredFlexBox>
              </Box>

              {group !== '' ? (
                group === 'over 16' ? (
                  <Box mt={2}>
                    <Typography align="center" px={2}>
                      Please read the following Information Sheet on GDPR compliance and informed
                      consent for the ABAIR project.
                    </Typography>
                    {i18n.language === 'ga' && (
                      <Typography mr={2} my={1} variant="body2" align="center">
                        *Leagan Gaeilge le teacht
                      </Typography>
                    )}
                    <Box p={1} mt={2} sx={{ backgroundColor: 'primary.wafer' }}>
                      <Box mt={1}>
                        <InformationSheet title="Information Sheet" group="over 16" />
                        <CenteredFlexBox>
                          <Typography>Download Information Sheet</Typography>
                          <AbIconButton
                            selected={true}
                            color="secondary"
                            onClick={() => {
                              downloadInfoSheet('InformationSheetOver16s');
                            }}
                            icon={DownloadIcon}
                          />
                        </CenteredFlexBox>
                      </Box>
                      <Box mt={2}>
                        <Consent title="Consent" />
                        <CenteredFlexBox>
                          <Typography>Download Consent Form</Typography>
                          <AbIconButton
                            selected={true}
                            color="secondary"
                            onClick={() => {
                              downloadInfoSheet('ConsentFormOver16s');
                            }}
                            icon={DownloadIcon}
                          />
                        </CenteredFlexBox>
                      </Box>

                      <Box mt={4} width={'100%'}>
                        <SignUpForm
                          who="self"
                          title="Sign Up"
                          email={email}
                          setEmail={setEmail}
                          password={password}
                          setPassword={setPassword}
                          confirmPassword={confirmPassword}
                          setConfirmPassword={setConfirmPassword}
                          emailAlreadyUsedError={emailAlreadyUsedError}
                        />
                      </Box>

                      <CenteredFlexBox sx={{ width: '100%' }} pb={2}>
                        <Button
                          disabled={emailPasswordOK && adultConsentOK ? false : true}
                          onClick={handleSubmit}
                          variant="contained"
                          sx={{ mt: 4 }}
                        >
                          {t('pages.auth.signup')}
                        </Button>
                      </CenteredFlexBox>
                    </Box>
                  </Box>
                ) : (
                  <Box mt={2}>
                    <Typography align="center" px={2}>
                      Your parent or caregiver must help you sign up. Please ask them to read the
                      information below.
                    </Typography>

                    <Box p={1} mt={2} sx={{ backgroundColor: 'secondary.wafer' }}>
                      <Box mt={1}>
                        <InformationSheet
                          title="Information Sheet for Parents and Caregivers of Under 16s"
                          // description="Please read the information below pertaining to GDPR and informed consent for your child or dependent."
                          group="parent"
                        />
                        <CenteredFlexBox mt={1}>
                          <Typography>Download Parent/Caregiver Information Sheet</Typography>
                          <AbIconButton
                            selected={true}
                            color="secondary"
                            onClick={() => {
                              downloadInfoSheet('InformationSheetParentsCaregivers');
                            }}
                            icon={DownloadIcon}
                          />
                        </CenteredFlexBox>
                      </Box>
                      <Box mt={2}>
                        <ConsentParent title="Consent for Parents and Caregivers" />
                        <CenteredFlexBox mt={2}>
                          <Typography>Download Parent/Caregiver Consent Form</Typography>
                          <AbIconButton
                            selected={true}
                            color="secondary"
                            onClick={() => {
                              downloadInfoSheet('ConsentFormforParentsCaregivers');
                            }}
                            icon={DownloadIcon}
                          />
                        </CenteredFlexBox>
                      </Box>
                      <Box mt={4} pb={3}>
                        <Box mt={4}>
                          <ParentConsentForm
                            parentEmail={parentEmail}
                            setParentEmail={setParentEmail}
                            parentName={parentName}
                            setParentName={setParentName}
                          />
                        </Box>
                      </Box>
                    </Box>

                    <Box p={1} mt={2} sx={{ backgroundColor: 'primary.wafer' }}>
                      <Box>
                        <InformationSheet
                          title="Information Sheet for Under 16s"
                          // description="Please read the information below pertaining to GDPR and informed consent for your child or dependent."
                          group="under 16"
                        />
                        <CenteredFlexBox>
                          <Typography>Download Under 16s Information Sheet</Typography>
                          <AbIconButton
                            selected={true}
                            color="secondary"
                            onClick={() => {
                              downloadInfoSheet('InformationSheetUnder16s');
                            }}
                            icon={DownloadIcon}
                          />
                        </CenteredFlexBox>
                      </Box>
                      <Box mt={2}>
                        <ConsentChild title="Consent for Under 16s" />
                        <CenteredFlexBox>
                          <Typography>Download Under 16s Consent Form</Typography>
                          <AbIconButton
                            selected={true}
                            color="secondary"
                            onClick={() => {
                              console.log('download');
                              downloadInfoSheet('ConsentFormUnder16s');
                            }}
                            icon={DownloadIcon}
                          />
                        </CenteredFlexBox>
                      </Box>
                      <Box mt={4}>
                        <Box mt={4}>
                          <SignUpForm
                            who="self"
                            title="Sign Up"
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            confirmPassword={confirmPassword}
                            setConfirmPassword={setConfirmPassword}
                            emailAlreadyUsedError={emailAlreadyUsedError}
                          />
                        </Box>
                        <CenteredFlexBox sx={{ width: '100%' }}>
                          <Button
                            disabled={
                              emailPasswordOK &&
                              parentConsentOK &&
                              childConsentOK &&
                              parentEmailNameOK
                                ? false
                                : true
                            }
                            onClick={handleSubmit}
                            variant="contained"
                            sx={{ mt: 4, mb: 3 }}
                          >
                            {t('pages.auth.signup')}
                          </Button>
                        </CenteredFlexBox>
                      </Box>
                    </Box>
                  </Box>
                )
              ) : null}
            </Box>
          )}
        </CenteredFlexBox>
        <CenteredFlexBox p={2}>
          <Button
            sx={{ color: 'secondary.main' }}
            onClick={() => {
              if (searchParams.get('origin') !== null) {
                navigate(`/login?origin=${searchParams.get('origin')}`);
              } else {
                navigate('/login');
              }
            }}
          >
            {t('pages.auth.haveAccount')}
          </Button>
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default SignUp;
