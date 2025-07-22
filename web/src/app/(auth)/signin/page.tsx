import * as React from 'react';
import ColorModeSelect from '@/theme/colorModeSelect';
import SigninContainer from '@/components/authpage/signinContainer';

export default function SignIn() {

  return (
    <>
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <SigninContainer />
    </>
  );
}