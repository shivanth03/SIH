import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneFrame = styled.div`
  width: 280px;
  height: 560px;
  background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
  border-radius: 40px;
  padding: 20px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: static;
  transform: none;
  transition: none;
  will-change: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: #333;
    border-radius: 3px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: #222;
    border-radius: 50%;
  }
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--cream) 0%, var(--white) 100%);
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
`;

const ScreenContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const CameraView = styled.div`
  width: 100%;
  height: 60%;
  background: linear-gradient(45deg, var(--primary-green), var(--secondary-green));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  
  &::after {
    content: '📸';
    font-size: 3rem;
    opacity: 0.7;
  }
`;

const ResultsView = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const BreedCard = styled.div`
  background: var(--light-green);
  border-radius: 15px;
  padding: 15px;
  margin: 10px 0;
  text-align: center;
  
  h3 {
    font-size: 1.1rem;
    color: var(--primary-green);
    margin-bottom: 5px;
  }
  
  p {
    font-size: 0.8rem;
    color: var(--gray-700);
  }
`;

const DashboardView = styled.div`
  width: 100%;
  height: 100%;
  background: var(--gray-100);
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const DashboardCard = styled.div`
  background: var(--white);
  border-radius: 12px;
  padding: 12px;
  margin: 5px 0;
  border-left: 4px solid var(--accent-green);
  
  h4 {
    font-size: 0.9rem;
    color: var(--primary-green);
    margin-bottom: 5px;
  }
  
  p {
    font-size: 0.7rem;
    color: var(--gray-700);
  }
`;

const FeaturesView = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--tech-blue), var(--light-blue));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  text-align: center;
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 10px;
`;

const DownloadView = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--warm-orange), var(--earth-brown));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  text-align: center;
`;

const DownloadButton = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  border-radius: 25px;
  padding: 10px 20px;
  margin: 10px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const phoneContentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const PhoneMockup = ({ activeSection, phoneContent, sectionData }) => {
  const renderPhoneContent = () => {
    switch (phoneContent) {
      case 'camera':
        return (
          <ScreenContent
            key="camera"
            variants={phoneContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <CameraView />
            <h3 style={{ color: 'var(--primary-green)', fontSize: '1rem' }}>
              Point Camera at Cattle
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--gray-700)' }}>
              AI will identify the breed instantly
            </p>
          </ScreenContent>
        );
      
      case 'results':
        return (
          <ScreenContent
            key="results"
            variants={phoneContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <ResultsView>
              <BreedCard>
                <h3>Gir Cattle</h3>
                <p>Confidence: 97%</p>
              </BreedCard>
              <BreedCard>
                <h3>Origin: Gujarat</h3>
                <p>Milk production: High</p>
              </BreedCard>
              <BreedCard>
                <h3>Health Status</h3>
                <p>Excellent condition</p>
              </BreedCard>
            </ResultsView>
          </ScreenContent>
        );
      
      case 'dashboard':
        return (
          <ScreenContent
            key="dashboard"
            variants={phoneContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <DashboardView>
              <DashboardCard>
                <h4>Herd Size</h4>
                <p>45 cattle registered</p>
              </DashboardCard>
              <DashboardCard>
                <h4>Health Alerts</h4>
                <p>2 animals need attention</p>
              </DashboardCard>
              <DashboardCard>
                <h4>Breeding Program</h4>
                <p>Next cycle in 15 days</p>
              </DashboardCard>
              <DashboardCard>
                <h4>Milk Production</h4>
                <p>Average: 18L/day per animal</p>
              </DashboardCard>
            </DashboardView>
          </ScreenContent>
        );
      
      case 'features':
        return (
          <ScreenContent
            key="features"
            variants={phoneContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <FeaturesView>
              <FeatureIcon>🧬</FeatureIcon>
              <h3 style={{ fontSize: '1rem', marginBottom: '10px' }}>
                Genetic Analysis
              </h3>
              <p style={{ fontSize: '0.8rem' }}>
                Advanced AI identifies genetic markers and breeding potential
              </p>
            </FeaturesView>
          </ScreenContent>
        );
      
      case 'download':
        return (
          <ScreenContent
            key="download"
            variants={phoneContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <DownloadView>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                Get the App
              </h3>
              <DownloadButton>📱 Download for Android</DownloadButton>
              <DownloadButton>🍎 Download for iOS</DownloadButton>
              <p style={{ fontSize: '0.7rem', marginTop: '15px', opacity: 0.8 }}>
                Free for all Indian farmers
              </p>
            </DownloadView>
          </ScreenContent>
        );
      
      default:
        return null;
    }
  };

  return (
    <PhoneFrame>
      <Screen>
        <AnimatePresence mode="wait">
          {renderPhoneContent()}
        </AnimatePresence>
      </Screen>
    </PhoneFrame>
  );
};

export default PhoneMockup;