"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type Props = {
  goToStep: (step: number) => void;
};

const ProductStep: React.FC<Props> = ({ goToStep }) => {
    const [domainError, setDomainError] = React.useState(false);
    const [domainErrorMessage, setDomainErrorMessage] = React.useState('');
    const [addressError, setAddressError] = React.useState(false);
    const [addressErrorMessage, setAddressErrorMessage] = React.useState('');
    const [workspaceError, setWorkspaceError] = React.useState(false);
    const [workspaceErrorMessage, setWorkspaceErrorMessage] = React.useState('');
    const supabase = createClientComponentClient();

    React.useEffect(() => {
      async function fetchData() {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        const {
          data: { user },
        } = await supabase.auth.getUser();

        console.log(user);
  
        const accessToken = session?.access_token;
        try {
          const res = await fetch('https://beyxnzacsudjyxexxrml.supabase.co/functions/v1/customer-api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              customer_name: user?.user_metadata.full_name,
            }),
          });
    
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
    
          const data = await res.text();
          // do something with data here
          console.log(data);
    
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
    
      fetchData();
    },[])

    const validateInputs = () => {
      const workspace = document.getElementById('workspace') as HTMLInputElement;
      const domain = document.getElementById('domain') as HTMLInputElement;
      const address = document.getElementById('address') as HTMLInputElement;
  
      let isValid = true;

      if (!workspace.value || !/^[a-zA-Z0-9 _-]{3,30}$/.test(workspace.value)) {
        setWorkspaceError(true);
        setWorkspaceErrorMessage('Please enter a valid workspace name.');
        isValid = false;
      } else {
        setWorkspaceError(false);
        setWorkspaceErrorMessage('');
      };
      
      if (!domain.value || !/^(https?:\/\/)([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(?::\d{1,5})?(\/[^\s]*)?$/.test(domain.value)) {
        setDomainError(true);
        setDomainErrorMessage('Please enter a valid domain address.');
        isValid = false;
      } else {
        setDomainError(false);
        setDomainErrorMessage('');
      };

      if (!address.value || !/^[a-zA-Z0-9\s.,#\-()/]{5,100}$/.test(address.value)) {
        setAddressError(true);
        setAddressErrorMessage('Please enter a valid address.');
        isValid = false;
      } else {
        setAddressError(false);
        setAddressErrorMessage('');
      }
  
      return isValid;
    };

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const form = new FormData(event.currentTarget);
      const workspace = form.get('workspace') as string;
      const domain = form.get('domain') as string;
      const address = form.get('address') as string;

      // Validate again before submitting (optional, since onClick already does)
      if (!validateInputs()) return;

      const {
        data: { session },
      } = await supabase.auth.getSession();

      const accessToken = session?.access_token;

      const res = await fetch('https://beyxnzacsudjyxexxrml.supabase.co/functions/v1/product-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          workspace_name: workspace,
          domain_name: domain,
          company_address: address,
        }),
      })
  
      const data = await res.json();
      console.log(data);
  
      if (res.ok) {
        alert('Success');
        goToStep(1);
      } else {
        alert(`Error: ${data.error}`)
      }
    };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl>
        <FormLabel htmlFor="workspace">Work space</FormLabel>
        <TextField
          required
          fullWidth
          id="workspace"
          placeholder="David's workspace"
          name="workspace"
          autoComplete="workspace"
          variant="outlined"
          error={workspaceError}
          helperText={workspaceErrorMessage}
          color={workspaceError ? 'error' : 'primary'}
        />
      </FormControl>
      <FormControl>
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
      </FormControl>
      <Button type="submit" fullWidth variant="contained">
        Set up now
      </Button>
    </Box>
  );
};

export default ProductStep;