'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { collection, doc, getDoc, setDoc, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'

import { useSearchParams } from 'next/navigation'
import {
    Container,
    Button,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    CardActionArea
} from '@mui/material'

export default function Flashcard(){
    const { isLoaded, isSignedIn, user } = useUser() // Correct useUser hook
    const [flipped, setFlipped] = useState({})
    const [flashcards, setFlashcards] = useState([])

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    useEffect(() => {
        async function getFlashcard() {
            if (!search || !user) return
            const colRef = collection(db, 'users', user.id, search)
            const docs = await getDocs(colRef)
            const flashcards = []
            docs.forEach((doc) => {
                flashcards.push({ id: doc.id, ...doc.data() })
            })
            setFlashcards(flashcards)
        }
        getFlashcard()
    }, [user, search])

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    if (!isLoaded || !isSignedIn) {
        return <></>
    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={3} sx={{ mt: 4 }}>
                {flashcards.length > 0 && (
                    <>
                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Generated Flashcards
                            </Typography>
                            <Grid container spacing={3} sx={{ mt: 4 }}>
                                {flashcards.map((flashcard) => (
                                    <Grid item xs={12} sm={6} md={4} key={flashcard.id}>
                                        <Card>
                                            <CardActionArea onClick={() => handleCardClick(flashcard.id)}>
                                                <CardContent>
                                                    <Box sx={{ /* Add any styling here */ }}>
                                                        <div>
                                                            <Typography variant="h5" component="div">
                                                                {flipped[flashcard.id] ? flashcard.back : flashcard.front}
                                                            </Typography>
                                                        </div>
                                                    </Box>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" color="primary">
                                Save 
                            </Button>
                        </Box>
                    </>
                )}
            </Grid>
        </Container>
    )
}
