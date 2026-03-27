import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.lightGrey};
  padding: 4rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;

  a {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterTitle>DEMO FITNESS STUDIO</FooterTitle>
          <p>A demo gym website built for showcasing programs, trainers, and transformations with placeholder contact details.</p>
          <SocialLinks>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </SocialLinks>
          <Copyright>&copy; {new Date().getFullYear()} Demo Fitness Studio. All Rights Reserved.</Copyright>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
