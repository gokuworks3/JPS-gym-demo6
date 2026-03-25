import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.colors.darkGrey};
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.2;
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: 2rem;
`;

const Author = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  align-self: flex-end;
`;

const Testimonial = ({ text, author }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <TestimonialWrapper
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
    >
      <QuoteIcon />
      <TestimonialText>"{text}"</TestimonialText>
      <Author>- {author}</Author>
    </TestimonialWrapper>
  );
};

export default Testimonial;
