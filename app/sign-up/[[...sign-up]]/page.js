"use client";
import React, { useState } from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { SignIn, SignUp } from '@clerk/nextjs'; // Import SignUp component from Clerk
import Link from 'next/link';

export default function SignUpPage() {
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <AppBar position="static" sx={{
                background: "linear-gradient(to right, #00c6ff, #0072ff)",
                color: "white"
            }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Flashcard SaaS
                    </Typography>
                    <Button
                        sx={{
                            color: 'white',
                            backgroundColor: 'transparent',
                            border: '1px solid white',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#0072ff',
                                borderColor: '#0072ff',
                                transition: 'all 0.3s ease-in-out',
                            },
                            transition: 'all 0.3s ease-in-out',
                            borderRadius: '20px',
                            px: 2,
                            py: 1,
                            mx: 1, // Add horizontal margin to create space between buttons
                            textTransform: 'none', // Ensure text is not transformed
                            '& a': {
                                color: 'inherit', // Ensure link color inherits from button
                                textDecoration: 'none', // Remove underline
                            }
                        }}
                    >
                        <Link href="/sign-in" passHref>
                            Login
                        </Link>
                    </Button>
                    <Button
                        sx={{
                            color: 'white',
                            backgroundColor: 'transparent',
                            border: '1px solid white',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#0072ff',
                                borderColor: '#0072ff',
                                transition: 'all 0.3s ease-in-out',
                            },
                            transition: 'all 0.3s ease-in-out',
                            borderRadius: '20px',
                            px: 2,
                            py: 1,
                            mx: 1, // Add horizontal margin to create space between buttons
                            textTransform: 'none', // Ensure text is not transformed
                            '& a': {
                                color: 'inherit', // Ensure link color inherits from button
                                textDecoration: 'none', // Remove underline
                            }
                        }}
                        onClick={() => setShowSignUp(true)} // Show sign-up form on click
                    >
                        Sign Up
                    </Button>
                </Toolbar>
            </AppBar>
            <Container
                maxWidth="sm"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center', // Center horizontally
                    minHeight: 'calc(100vh - 64px - 48px)', // Adjust height considering AppBar and footer
                    px: 2, // Optional padding to avoid content touching edges
                }}
            >
                {/* Conditional rendering of SignIn or SignUp */}
                <Box textAlign="center" sx={{
                    animation: 'fadeIn 1s ease-in-out'
                }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {showSignUp ? 'Sign Up' : 'Sign In'}
                    </Typography>
                    {showSignUp ? <SignUp /> : <SignIn />}
                </Box>
            </Container>
        </Box>
    );
}

// Add these styles to a global CSS file or within a styled-components/global styles
const globalStyles = `
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
`;
