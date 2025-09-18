import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroBannerPhone from './HeroBannerPhone';

const HeroContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-lg);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const TextContent = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const Title = styled(motion.h1)`
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3);
  }
  
  &::before {
    content: '📱';
    font-size: 1.2rem;
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: #2563eb;
  padding: 1rem 2rem;
  border: 2px solid #2563eb;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #2563eb;
    color: white;
    transform: translateY(-3px);
  }
  
  &::before {
    content: '▶️';
    font-size: 1rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  h3 {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: #64748b;
  }
`;

const VisualContent = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding-right: 1rem;
  
  @media (max-width: 768px) {
    order: 1;
    justify-content: center;
    padding-right: 0;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <ContentWrapper>
        <TextContent>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI-Powered Cattle Recognition
            <br />
            <span style={{ color: '#2563eb' }}>for India</span>
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionary technology that helps Indian farmers identify cattle and buffalo breeds with 99% accuracy, empowering better livestock management and breeding decisions.
          </Subtitle>
          
          <CTAButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <PrimaryButton href="#cta">
              Download App
            </PrimaryButton>
            <SecondaryButton href="#features">
              Watch Demo
            </SecondaryButton>
          </CTAButtons>
          
          <Stats
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <StatItem>
              <h3>50+</h3>
              <p>Breed Types</p>
            </StatItem>
            <StatItem>
              <h3>99%</h3>
              <p>Accuracy</p>
            </StatItem>
            <StatItem>
              <h3>10K+</h3>
              <p>Farmers</p>
            </StatItem>
          </Stats>
        </TextContent>
        
        <VisualContent
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <HeroBannerPhone />
        </VisualContent>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;