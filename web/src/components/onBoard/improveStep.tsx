"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

type Props = {
    goToStep: (step: number) => void;
};

const ImproveStep: React.FC<Props> = ({ goToStep }) => {
    // const [domainError, setDomainError] = React.useState(false);
    // const [domainErrorMessage, setDomainErrorMessage] = React.useState('');
    // const [addressError, setAddressError] = React.useState(false);
    // const [addressErrorMessage, setAddressErrorMessage] = React.useState('');

    // const validateInputs = () => {
    //   const domain = document.getElementById('domain') as HTMLInputElement;
    //   const address = document.getElementById('address') as HTMLInputElement;
  
    //   let isValid = true;
      
    //   if (!domain.value || !/^(https?:\/\/)([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(?::\d{1,5})?(\/[^\s]*)?$/.test(domain.value)) {
    //     setDomainError(true);
    //     setDomainErrorMessage('Please enter a valid email address.');
    //     isValid = false;
    //   } else {
    //     setDomainError(false);
    //     setDomainErrorMessage('');
    //   };

    //   if (!address.value || !/^[a-zA-Z0-9\s.,#\-()/]{5,100}$/.test(address.value)) {
    //     setAddressError(true);
    //     setAddressErrorMessage('Please enter a valid email address.');
    //     isValid = false;
    //   } else {
    //     setAddressError(false);
    //     setAddressErrorMessage('');
    //   }
  
    //   return isValid;
    // };

    // const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
  
    // //   const form = new FormData(event.currentTarget);
    // //   const domain = form.get('domain') as string;
    // //   const address = form.get('password') as string;
  
    //   // Validate again before submitting (optional, since onClick already does)
    //   if (!validateInputs()) return;
    //   console.log(domain, address);
    // };
  return (
    <Box
      component="form"
    //   onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      {/* <FormControl>
        <FormLabel htmlFor="domain">Domain</FormLabel>
        <TextField
          required
          fullWidth
          id="domain"
          placeholder="https://hey.example.com"
          name="domain"
          autoComplete="domain"
          variant="outlined"
          error={domainError}
          helperText={domainErrorMessage}
          color={domainError ? 'error' : 'primary'}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="address">Company Address</FormLabel>
        <TextField
          required
          fullWidth
          name="address"
          placeholder="••••••"
          type="address"
          id="address"
          autoComplete="address"
          variant="outlined"
          error={addressError}
          helperText={addressErrorMessage}
          color={addressError ? 'error' : 'primary'}
        />
      </FormControl> */}
      <Box sx={{ maxWidth: 400, width: '100%', p: 2 }}>
            We'll be adding CNAME, SPF, and MX records to your domain register
      </Box>
      <Button fullWidth variant="contained" onClick={() => goToStep(2)}>
        Set up now
      </Button>
    </Box>
  );
};

export default ImproveStep;