import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background: ${props => props.layout === 'left' ? 'var(--cream)' : 'var(--white)'};
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: ${props => props.layout === 'left' ? '2fr 3fr' : '3fr 2fr'};
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  order: ${props => props.layout === 'left' ? 2 : 1};
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const VisualContent = styled(motion.div)`
  order: ${props => props.layout === 'left' ? 1 : 2};
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const Subtitle = styled(motion.span)`
  display: inline-block;
  background: linear-gradient(135deg, var(--warm-orange), var(--earth-brown));
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

const BenefitsList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 4px solid var(--warm-orange);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
  
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary-green);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--gray-700);
    line-height: 1.5;
  }
`;

const ActionButton = styled(motion.a)`
  background: linear-gradient(135deg, var(--warm-orange), var(--earth-brown));
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
    box-shadow: 0 10px 25px rgba(255, 140, 66, 0.3);
  }
  
  &::after {
    content: '🚀';
    font-size: 1.2rem;
  }
`;

const BenefitsVisual = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const BenefitCard = styled(motion.div)`
  background: linear-gradient(135deg, var(--secondary-green), var(--accent-green));
  border-radius: 20px;
  padding: 1.5rem;
  color: white;
  text-align: center;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 15px 30px rgba(74, 124, 58, 0.3);
  
  &:nth-child(2) {
    background: linear-gradient(135deg, var(--tech-blue), var(--light-blue));
    transform: translateY(20px);
  }
  
  &:nth-child(3) {
    background: linear-gradient(135deg, var(--warm-orange), var(--earth-brown));
    transform: translateY(20px);
  }
  
  &:nth-child(4) {
    background: linear-gradient(135deg, var(--primary-green), var(--secondary-green));
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const BenefitsSection = ({ layout, title, subtitle, description, benefits }) => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <SectionContainer layout={layout} id="benefits">
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
          
          <BenefitsList variants={itemVariants}>
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4>
                  <span>💡</span>
                  {benefit}
                </h4>
                <p>
                  {index === 0 && "Make informed decisions about breeding pairs to improve genetic diversity and milk production."}
                  {index === 1 && "Early detection of genetic diseases and health issues through breed-specific health profiles."}
                  {index === 2 && "Maintain detailed records of animal lineage for better breeding program management."}
                  {index === 3 && "Get instant access to qualified veterinarians specialized in your cattle breeds."}
                </p>
              </BenefitItem>
            ))}
          </BenefitsList>
          
          <ActionButton
            href="#grid"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </ActionButton>
        </TextContent>
        
        <VisualContent
          layout={layout}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <BenefitsVisual>
            <BenefitCard
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <CardIcon>📈</CardIcon>
              <CardTitle>Productivity</CardTitle>
              <CardValue>+35%</CardValue>
            </BenefitCard>
            
            <BenefitCard
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <CardIcon>💰</CardIcon>
              <CardTitle>Revenue</CardTitle>
              <CardValue>+28%</CardValue>
            </BenefitCard>
            
            <BenefitCard
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <CardIcon>⏱️</CardIcon>
              <CardTitle>Time Saved</CardTitle>
              <CardValue>60%</CardValue>
            </BenefitCard>
            
            <BenefitCard
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <CardIcon>🎯</CardIcon>
              <CardTitle>Accuracy</CardTitle>
              <CardValue>99%</CardValue>
            </BenefitCard>
          </BenefitsVisual>
        </VisualContent>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default BenefitsSection;