import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background: ${props => props.layout === 'right' ? 'var(--white)' : 'var(--gray-100)'};
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: ${props => props.layout === 'right' ? '3fr 2fr' : '2fr 3fr'};
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  order: ${props => props.layout === 'right' ? 1 : 2};
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const VisualContent = styled(motion.div)`
  order: ${props => props.layout === 'right' ? 2 : 1};
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const Subtitle = styled(motion.span)`
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-green), var(--secondary-green));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h2)`
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-green);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const FeaturesList = styled(motion.ul)`
  list-style: none;
  margin-bottom: 2rem;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--gray-700);
  
  &::before {
    content: '✅';
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;

const ActionButton = styled(motion.a)`
  background: linear-gradient(135deg, var(--secondary-green), var(--accent-green));
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(74, 124, 58, 0.3);
  }
  
  &::after {
    content: '→';
    font-size: 1.2rem;
  }
`;

const FeatureVisual = styled.div`
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, var(--tech-blue), var(--light-blue));
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 25px 50px rgba(30, 58, 138, 0.3);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.5;
  position: relative;
  z-index: 1;
`;

const FeatureSection = ({ layout, title, subtitle, description, features }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionContainer layout={layout} id="features">
      <ContentWrapper layout={layout} ref={ref}>
        <TextContent
          layout={layout}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Subtitle variants={itemVariants}>
            {subtitle}
          </Subtitle>
          
          <Title variants={itemVariants}>
            {title}
          </Title>
          
          <Description variants={itemVariants}>
            {description}
          </Description>
          
          <FeaturesList variants={itemVariants}>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                {feature}
              </FeatureItem>
            ))}
          </FeaturesList>
          
          <ActionButton
            href="#benefits"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </ActionButton>
        </TextContent>
        
        <VisualContent
          layout={layout}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FeatureVisual>
            <FeatureIcon>🧠</FeatureIcon>
            <FeatureTitle>AI Recognition</FeatureTitle>
            <FeatureDescription>
              Advanced machine learning algorithms trained on thousands of Indian cattle images for precise breed identification
            </FeatureDescription>
          </FeatureVisual>
        </VisualContent>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FeatureSection;