import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneFrame = styled.div`
  width: 260px;
  height: 520px;
  background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
  border-radius: 20px;
  padding: 15px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  
  /* Notch */
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: #333;
    border-radius: 3px;
  }
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`;

const ImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2d5016, #4a7c3a);
`;

const PhoneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.bg || 'linear-gradient(135deg, #2d5016, #4a7c3a)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
  border-radius: 24px;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.9;
    line-height: 1.4;
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const SpaceHint = styled(motion.div)`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(45, 80, 22, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '⌨️';
    margin-right: 0.5rem;
  }
`;

const imageData = [
  {
    type: 'placeholder',
    content: {
      icon: '📸',
      title: 'AI Camera',
      description: 'Point camera at cattle for instant breed recognition'
    },
    bg: 'linear-gradient(135deg, #2d5016, #4a7c3a)'
  },
  {
    type: 'placeholder',
    content: {
      icon: '🐄',
      title: 'Gir Cattle',
      description: 'Breed: Gir\nAccuracy: 97%\nOrigin: Gujarat'
    },
    bg: 'linear-gradient(135deg, #1e3a8a, #3b82f6)'
  },
  {
    type: 'placeholder',
    content: {
      icon: '🧬',
      title: 'Genetic Analysis',
      description: 'Advanced AI identifies genetic markers and breeding potential'
    },
    bg: 'linear-gradient(135deg, #7c2d12, #ea580c)'
  },
  {
    type: 'placeholder',
    content: {
      icon: '📊',
      title: 'Health Monitor',
      description: 'Track health metrics and get alerts for potential issues'
    },
    bg: 'linear-gradient(135deg, #581c87, #8b5cf6)'
  },
  {
    type: 'placeholder',
    content: {
      icon: '💰',
      title: 'Market Prices',
      description: 'Real-time market prices and demand forecasts for breeds'
    },
    bg: 'linear-gradient(135deg, #166534, #22c55e)'
  }
];

const HeroBannerPhone = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        setCurrentImageIndex((prev) => (prev + 1) % imageData.length);
        setShowHint(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Auto-hide hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: -90 },
    animate: { opacity: 1, scale: 1, rotateY: 0 },
    exit: { opacity: 0, scale: 0.8, rotateY: 90 }
  };

  const currentImage = imageData[currentImageIndex];

  return (
    <PhoneWrapper>
      <PhoneFrame>
        <Screen>
          <AnimatePresence mode="wait">
            <ImageContainer
              key={currentImageIndex}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {currentImage.type === 'image' ? (
                <PhoneImage src={currentImage.src} alt={currentImage.alt} />
              ) : (
                <PlaceholderImage bg={currentImage.bg}>
                  <div className="icon">{currentImage.content.icon}</div>
                  <h3>{currentImage.content.title}</h3>
                  <p>{currentImage.content.description}</p>
                </PlaceholderImage>
              )}
            </ImageContainer>
          </AnimatePresence>
        </Screen>
      </PhoneFrame>
      
      <AnimatePresence>
        {showHint && (
          <SpaceHint
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            Press SPACE to see features
          </SpaceHint>
        )}
      </AnimatePresence>
    </PhoneWrapper>
  );
};

export default HeroBannerPhone;