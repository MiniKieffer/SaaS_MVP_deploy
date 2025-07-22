"use client";
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


export default function Hero() {
    const router = useRouter();
    return (
      <Box
        id="hero"
        sx={(theme) => ({
          width: '100%',
          height:'100vh',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
          ...theme.applyStyles('dark', {
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, hsla(0, 98.80%, 32.50%, 0.92), transparent)',
          }),
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 20, sm: 25 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={8}
            useFlexGap
            sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
          >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start', // or "flex-start" depending on your layout
                  width: '60%',
                  height: '64px', // or adjust to your preference
                  border: '1px solid #ccc',
                  borderRadius: '64px',
                  padding: '0 16px',
                  backgroundColor: '#fff',
                }}
              >
                <AvatarGroup spacing="medium" max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </AvatarGroup>
                <Typography sx={{ marginLeft: '16px' }}>500+ SaaS companies use us</Typography>
              </Box>
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(4rem, 10vw, 4rem)',
              }}
            >
              Cut&nbsp;Churn,&nbsp;
              <br />
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                grow ARR.
              </Typography>
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                width: { sm: '100%', md: '80%' },
              }}
            >
              Explore our cutting-edge dashboard, delivering high-quality solutions
              tailored to your needs. Elevate your experience with top-tier features
              and services.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
            >

              <Button
                variant="contained"
                color="primary"
                size="medium"
                sx={{ minWidth: '100%' }}
                onClick={() => {router.push('/signup');}}
              >
                Start Free 7-Day Trial
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
}
