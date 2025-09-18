import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #1e293b;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: #64748b;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(37, 99, 235, 0.4);
  }
  
  &::before {
    content: '📱';
    font-size: 1.3rem;
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: #2563eb;
  padding: 1.2rem 2.5rem;
  border: 2px solid #2563eb;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2563eb;
    color: white;
    transform: translateY(-3px);
  }
  
  &::before {
    content: '🌐';
    font-size: 1.3rem;
  }
`;

const StatsSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(37, 99, 235, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(37, 99, 235, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  
  h3 {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #2563eb;
  }
  
  p {
    font-size: 1rem;
    opacity: 0.8;
    font-weight: 500;
    color: #64748b;
  }
`;

const TrustBadges = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 3rem;
  color: #64748b;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  
  &::before {
    content: '${props => props.icon}';
    font-size: 1.2rem;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }
  
  &::before {
    top: 20%;
    left: 10%;
    animation-delay: -2s;
  }
  
  &::after {
    bottom: 20%;
    right: 10%;
    animation-delay: -4s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const CTASection = () => {
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

  const stats = [
    { number: '10,000+', label: 'Active Farmers' },
    { number: '50+', label: 'Breed Types' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <SectionContainer id="cta">
      <FloatingElements />
      <ContentWrapper ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Title variants={itemVariants}>
            Ready to Transform Your
            <br />
            <span style={{ color: '#2563eb' }}>Livestock Management?</span>
          </Title>
          
          <Description variants={itemVariants}>
            Join thousands of Indian farmers who are already using AI to make smarter decisions about their cattle and buffalo. Download our free app and start recognizing breeds instantly.
          </Description>
          
          <CTAButtons variants={itemVariants}>
            <PrimaryButton
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Free App
            </PrimaryButton>
            <SecondaryButton
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Web Demo
            </SecondaryButton>
          </CTAButtons>
          
          <StatsSection variants={itemVariants}>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatCard>
            ))}
          </StatsSection>
          
          <TrustBadges variants={itemVariants}>
            <Badge icon="🏆">Award-Winning Technology</Badge>
            <Badge icon="🔒">Secure & Private</Badge>
            <Badge icon="🇮🇳">Made in India</Badge>
            <Badge icon="💡">Government Backed</Badge>
          </TrustBadges>
        </motion.div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default CTASection;