"use client"; // Add this directive at the top

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Container, Typography, AppBar, Toolbar, Button, Box, Grid } from '@mui/material';
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FlashCard Saas</title>
        <meta name="description" content="Flashcard from your text" />
      </Head>

      <AppBar position="static"
        sx={{
          background: "linear-gradient(to right, #00c6ff, #0072ff)",
          color: "white"
        }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, fontSize: 'x-large' }}>
            FlashCard Saas
          </Typography>
          <SignInButton>
            <Button 
                color="inherit" 
                sx={{ mx: 3 }} // Adds horizontal margin
            >
              <Link href="/sign-in" passHref>
                            Login
                        </Link>
                
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button 
                color="inherit" 
                sx={{ mx: 3 }} // Adds horizontal margin
            >
              <Link href="/sign-up" passHref>
                            
                        </Link>
                
            </Button>
          </SignUpButton>
          <UserButton />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          background: "linear-gradient(to right, #00c6ff, #0072ff)",
          color: "white",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to FlashCard SaaS
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Create, manage, and master your flashcards with ease.
          </Typography>
          <SignInButton>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 4 }}
            >
              Get Started
            </Button>
          </SignInButton>
          
          {/* Features Section */}
          <Box sx={{ my: 6, textAlign: 'center' }}>
            <Typography variant="h4" components="h2">
              Features
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: 1 }}>
              {['Easy Text Input', 'Smart Flashcards', 'Accessible Anywhere'].map((title, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: 2,
                  }}>
                    <Typography variant="h6">{title}</Typography>
                    <Typography>
                      {index === 0 && "Simply input your text and let our software do the rest. Creating flashcards has never been easier."}
                      {index === 1 && "Our AI intelligently breaks down your text into concise flashcards, perfect for studying."}
                      {index === 2 && "Access your flashcards from any device.with the limited Storage.which is available all time for you."}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Pricing Section */}
          <Box sx={{ my: 6, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
            <Grid container spacing={4} sx={{ marginTop: 1 }}>
              {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: 2,
                  }}>
                    <Typography variant="h5">{plan}</Typography>
                    <Typography variant="h6" gutterBottom>{`$${5 + index * 15} / month`}</Typography>
                    <Typography>
                      {plan === 'Basic' && "Access to Basic FlashCard Features and Limited Storage."}
                      {plan === 'Pro' && "Advanced FlashCard Features with Increased Storage."}
                      {plan === 'Enterprise' && "Full Access to All Features and Unlimited Storage."}
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                      {`Choose ${plan}`}
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
