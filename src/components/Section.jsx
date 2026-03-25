import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = styled.section`
  padding: 6rem 0;
  background: ${({ theme, bg }) => bg || theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const Section = ({ children, id, bg }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionWrapper id={id} bg={bg}>
      <Container>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

export default Section;
