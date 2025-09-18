import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background: var(--gray-100);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Subtitle = styled(motion.span)`
  display: inline-block;
  background: linear-gradient(135deg, var(--tech-blue), var(--light-blue));
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
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--gray-700);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-top: 4px solid var(--accent-green);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  &:nth-child(2) {
    border-top-color: var(--tech-blue);
  }
  
  &:nth-child(3) {
    border-top-color: var(--warm-orange);
  }
  
  &:nth-child(4) {
    border-top-color: var(--secondary-green);
  }
  
  &:nth-child(5) {
    border-top-color: var(--light-blue);
  }
  
  &:nth-child(6) {
    border-top-color: var(--earth-brown);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-green), var(--secondary-green));
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  
  ${FeatureCard}:nth-child(2) & {
    background: linear-gradient(135deg, var(--tech-blue), var(--light-blue));
  }
  
  ${FeatureCard}:nth-child(3) & {
    background: linear-gradient(135deg, var(--warm-orange), var(--earth-brown));
  }
  
  ${FeatureCard}:nth-child(4) & {
    background: linear-gradient(135deg, var(--secondary-green), var(--primary-green));
  }
  
  ${FeatureCard}:nth-child(5) & {
    background: linear-gradient(135deg, var(--light-blue), var(--tech-blue));
  }
  
  ${FeatureCard}:nth-child(6) & {
    background: linear-gradient(135deg, var(--earth-brown), var(--warm-orange));
  }
`;

const FeatureTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-green);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: var(--gray-700);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  font-size: 0.9rem;
  color: var(--gray-600);
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    
    &::before {
      content: '✓';
      color: var(--accent-green);
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

const features = [
  {
    icon: '🔍',
    title: 'Advanced Breed Recognition',
    description: 'Identify 50+ Indian cattle and buffalo breeds with industry-leading accuracy using computer vision.',
    points: ['Real-time identification', 'Works in all lighting', 'Offline capability', '99% accuracy rate']
  },
  {
    icon: '📊',
    title: 'Health Monitoring',
    description: 'Track animal health metrics and receive alerts for potential health issues based on breed-specific data.',
    points: ['Disease prediction', 'Health alerts', 'Vaccination tracking', 'Growth monitoring']
  },
  {
    icon: '🧬',
    title: 'Genetic Analysis',
    description: 'Analyze genetic traits and breeding potential to optimize your livestock breeding program.',
    points: ['Lineage tracking', 'Genetic diversity', 'Breeding recommendations', 'Trait analysis']
  },
  {
    icon: '💰',
    title: 'Market Intelligence',
    description: 'Get real-time market prices and demand forecasts for different breeds in your region.',
    points: ['Price tracking', 'Market trends', 'Demand forecasts', 'Profit optimization']
  },
  {
    icon: '🌱',
    title: 'Nutrition Management',
    description: 'Receive breed-specific nutrition recommendations to maximize milk production and animal health.',
    points: ['Custom feed plans', 'Nutrition tracking', 'Cost optimization', 'Growth enhancement']
  },
  {
    icon: '👨‍⚕️',
    title: 'Veterinary Connect',
    description: 'Connect with qualified veterinarians who specialize in your specific cattle breeds.',
    points: ['Expert consultation', '24/7 support', 'Emergency assistance', 'Breed specialists']
  }
];

const FeaturesGridComponent = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionContainer id="grid">
      <ContentWrapper ref={ref}>
        <SectionHeader>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          >
            AI Features
          </Subtitle>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive Livestock Management
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Our AI-powered platform provides everything you need to manage your cattle and buffalo with confidence, from breed identification to health monitoring and market intelligence.
          </Description>
        </SectionHeader>
        
        <FeaturesGrid
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <FeatureList>
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FeaturesGridComponent;