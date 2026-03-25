import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import Button from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: ${({ theme, isScrolled }) => (isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent')};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

const NavLogo = styled.a`
  color: ${({ theme }) => theme.colors.white};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.colors.dark};
  }
`;

const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

const NavLinks = styled.a`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <NavbarContainer>
        <NavLogo href="#">JPS FITNESS</NavLogo>
        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLinks href="#about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#pricing">Pricing</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks href="#contact">Contact</NavLinks>
          </NavItem>
          <Button primary>Join Now</Button>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
