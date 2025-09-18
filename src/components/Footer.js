import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #fef3c7 0%, #ddd6fe 25%, #bfdbfe 50%, #d1fae5 75%, #fed7d7 100%);
  color: #374151;
  padding: 2rem 0;
  border-top: 1px solid #cbd5e1;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="colorDots" width="15" height="15" patternUnits="userSpaceOnUse"><circle cx="7.5" cy="7.5" r="0.8" fill="%23ffffff" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23colorDots)"/></svg>');
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 1;
`;

const FooterContent = styled.div`
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CompanyInfo = styled.div`
  margin-bottom: 1rem;
  
  h3 {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 600;
    color: #1e40af;
    margin-bottom: 0.5rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    
    &::before {
      content: '🐄';
      font-size: 1.5rem;
    }
  }
  
  p {
    color: #374151;
    font-size: 0.9rem;
    max-width: 600px;
    margin: 0 auto 1rem;
    line-height: 1.5;
    font-weight: 500;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }
`;

const FooterSection = styled.div`
  h4 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    color: #60a5fa;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: #60a5fa;
        }
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #374151;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding-top: 1rem;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <FooterContent>
          <CompanyInfo>
            <h3>AI Cattle Recognition</h3>
            <p>
              Empowering Indian farmers with cutting-edge AI technology for better livestock management.
            </p>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
              <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
              <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">💼</SocialLink>
              <SocialLink href="#" aria-label="YouTube">📺</SocialLink>
            </SocialLinks>
          </CompanyInfo>
        </FooterContent>
        
        <Copyright>
          <p>
            © 2024 AI Cattle Recognition. All rights reserved. | 
            <a href="#privacy" style={{ color: '#1e40af', marginLeft: '0.5rem' }}>Privacy Policy</a> | 
            <a href="#terms" style={{ color: '#1e40af', marginLeft: '0.5rem' }}>Terms of Service</a>
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Made with ❤️ for Indian farmers | Hackathon Project 2024
          </p>
        </Copyright>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;