import * as React from 'react';
import ColorModeSelect from '@/theme/colorModeSelect';
import SignupContainer from '@/components/authpage/signupContainer';

export default function SignUp() {

  return (
    <>
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <SignupContainer />
    </>
  );
}