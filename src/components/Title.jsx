import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const MainTitle = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = ({ subtitle, title }) => {
  return (
    <TitleWrapper>
      <Subtitle>{subtitle}</Subtitle>
      <MainTitle>{title}</MainTitle>
    </TitleWrapper>
  );
};

export default Title;
