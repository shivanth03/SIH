import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gray-200);
  z-index: 100;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-green);
  
  &::before {
    content: '🐄';
    margin-right: 0.5rem;
    font-size: 2rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: var(--gray-700);
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary-green);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-green);
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
  padding: 1rem;
  
  ul {
    list-style: none;
    
    li {
      padding: 0.5rem 0;
      
      a {
        text-decoration: none;
        color: var(--gray-700);
        font-weight: 500;
      }
    }
  }
`;

const CTAButton = styled.a`
  background: linear-gradient(135deg, var(--primary-green), var(--secondary-green));
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(45, 80, 22, 0.3);
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <Logo>AI Cattle Recognition</Logo>
        
        <NavLinks>
          <NavLink>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
              Home
            </a>
          </NavLink>
          <NavLink>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
              Features
            </a>
          </NavLink>
          <NavLink>
            <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>
              Benefits
            </a>
          </NavLink>
          <NavLink>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About
            </a>
          </NavLink>
        </NavLinks>
        
        <CTAButton href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}>
          Get App
        </CTAButton>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </Nav>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ul>
            <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
            <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>Benefits</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          </ul>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;