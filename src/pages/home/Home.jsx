import React from 'react';
import Sliderheader from '../../components/slider/Sliderheader';
import Categories from '../../components/Categories/Categories';
import ReviewSection from '../../components/Review/ReviewSection';
import Servicescomp from '../../components/services/Servicescomp';
import CleanEnergySection from '../../components/CleanEnergy/CleanEnergySection';
const Home = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
    <Sliderheader/>
    <Categories/>
    <Servicescomp />
    <ReviewSection/>
    <CleanEnergySection/>
    </div>
  );
};

export default Home;
