import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesGrid from './components/FeaturesGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  // Section observers for scroll detection
  const sectionRefs = [
    useInView({ threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }),
    useInView({ threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }),
    useInView({ threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }),
    useInView({ threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }),
    useInView({ threshold: 0.5, rootMargin: '-20% 0px -20% 0px' })
  ];

  return (
    <AppContainer>
      <Header />

      <ContentWrapper>
        <div ref={sectionRefs[0].ref}>
          <HeroSection />
        </div>

        <div ref={sectionRefs[1].ref}>
          <FeatureSection 
            layout="right"
            title="Intelligent Breed Recognition"
            subtitle="Advanced AI Technology"
            description="Our cutting-edge AI system can identify over 50 cattle and buffalo breeds native to India with 99% accuracy. Simply point your camera at the animal and get instant results."
            features={[
              "50+ Indian cattle breeds supported",
              "Real-time recognition in 2 seconds",
              "Works in various lighting conditions",
              "Offline capability for remote areas"
            ]}
          />
        </div>

        <div ref={sectionRefs[2].ref}>
          <BenefitsSection 
            layout="left"
            title="Empowering Farmers"
            subtitle="Data-Driven Decisions"
            description="Make informed decisions about breeding, feeding, and healthcare with AI-powered insights tailored for Indian livestock management."
            benefits={[
              "Optimize breeding programs",
              "Prevent genetic diseases",
              "Track lineage and genetics",
              "Connect with veterinarians"
            ]}
          />
        </div>

        <div ref={sectionRefs[3].ref}>
          <FeaturesGrid />
        </div>

        <div ref={sectionRefs[4].ref}>
          <CTASection />
        </div>
      </ContentWrapper>

      <Footer />
    </AppContainer>
  );
}

export default App;