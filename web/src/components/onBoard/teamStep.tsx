"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';


export default function TeamStep() {
    const [teamEmailError, setTeamEmailError] = React.useState(false);
    const [teamEmailErrorMessage, setTeamEmailErrorMessage] = React.useState('');
    const router = useRouter();

    const validateInputs = () => {
      const teamEmails = document.getElementById('teamEmails') as HTMLInputElement;
  
      let isValid = true;
      
      if (!teamEmails.value || !/^([\w.-]+@[\w.-]+\.[a-zA-Z]{2,})(\s*,\s*[\w.-]+@[\w.-]+\.[a-zA-Z]{2,})*$/.test(teamEmails.value)) {
        setTeamEmailError(true);
        setTeamEmailErrorMessage('Please enter a valid email address.');
        isValid = false;
      } else {
        setTeamEmailError(false);
        setTeamEmailErrorMessage('');
      };

      return isValid;
    };

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const form = new FormData(event.currentTarget);
      const teamEmails = form.get('teamEmails') as string;
  
      // Validate again before submitting (optional, since onClick already does)
      if (!validateInputs()) return;
      console.log(teamEmails);
      router.push('/dashboard');
    };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl>
        <FormLabel htmlFor="teamEmails">Team member emails</FormLabel>
        <TextField
          required
          fullWidth
          id="teamEmails"
          placeholder="Seph@example.com, Tom@example.com"
          name="teamEmails"
          autoComplete="teamEmails"
          variant="outlined"
          error={teamEmailError}
          helperText={teamEmailErrorMessage}
          color={teamEmailError ? 'error' : 'primary'}
        />
      </FormControl>
      <Box sx={{ maxWidth: 400, width: '100%', p: 2 }}>
        Add multiple team members by seperating each email with comma.
      </Box>
      <Button type="submit" fullWidth variant="contained">
        Invite & Finish
      </Button>
    </Box>
  );
};