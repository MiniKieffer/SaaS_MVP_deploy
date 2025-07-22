"use client";
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Card, OnBoardContainer } from '@/components/common/onBoardStyle';
import { SitemarkIcon } from '@/components/common/customIcons';
import ProductStep from '@/components/onBoard/productStep';
import ImproveStep from '@/components/onBoard/improveStep';
import ContactStep from '@/components/onBoard/contactStep';
import TeamStep from '@/components/onBoard/teamStep';


export default function OnBoardProcessStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const router = useRouter();
 
  const steps = [
    {
      label: 'Set up your product',
      description: `We send emails from your domin for higher deliverability.`,
      component: <ProductStep goToStep={setActiveStep} />,
    },
    {
      label: 'Improve deliverability',
      description: 'Ensure your emails hit the inbox',
      component: <ImproveStep goToStep={setActiveStep} />,
    },
    {
      label: 'Import Contacts',
      description: `Build out your audience.`,
      component: <ContactStep goToStep={setActiveStep} />,
    },
    {
      label: 'Invite your team',
      description: `Get the whole squad onboard.`,
      component: <TeamStep />,
    },
  ];
  const maxSteps = steps.length;
  const handleNext = () => {
    if(activeStep >= 3) {
      router.push('/dashboard');
      setActiveStep(3);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <OnBoardContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <SitemarkIcon />
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          {steps[activeStep].label}
        </Typography>
        <Box sx={{ maxWidth: 400, width: '100%', p: 2 }}>
            {steps[activeStep].description}
        </Box>
        {steps[activeStep].component}
        <Divider>
        </Divider>
        <MobileStepper
          variant="progress"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Card>
    </OnBoardContainer>
    
  );
}