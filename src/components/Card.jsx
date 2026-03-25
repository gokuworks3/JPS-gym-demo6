import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CardWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.colors.darkGrey};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const Card = ({ icon, title, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <CardWrapper
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardWrapper>
  );
};

export default Card;
