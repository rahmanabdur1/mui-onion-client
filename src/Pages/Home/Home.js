import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import FoodCategory from '../../Components/FoodCategory/FoodCategory';
import Features from '../../Components/Features/Features';
import { Stack } from '@mui/material';
import Footer from '../../Components/Footer/Footer';

const Home =(() => {
    return (
        <Stack spacing={10}>
       <HeroSection/>
       <FoodCategory/>
       <Features/>
       <Footer/>
        </Stack>
    );
});

export default Home;