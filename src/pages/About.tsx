import React from 'react';
import { StyledAbout } from '../components/styles/About.styled';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <AnimatePresence>
      <StyledAbout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2>Some information about the page</h2>
          <p>
            For the front-end i'm using React with TypeScript and the most
            important packages to highlight are :
          </p>
          <ul>
            <li>styled-components</li>
            <li>react-router-dom</li>
            <li>axios</li>
          </ul>

          <p>
            For the back-end I'm using Node js without TypeScript and the most
            important packages to highlight are :
          </p>
          <ul>
            <li>express</li>
            <li>mongoose</li>
            <li>passport-jwt</li>
          </ul>
          <br />
          <div className='LinkContainer'>
            <div>
              <p>
                Here the repository :{' '}
                <a
                  href='https://github.com/pablo-gorgoglione/blog-api'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  GitHub
                </a>
              </p>
              <p>
                Here are my{' '}
                <a
                  href='https://github.com/pablo-gorgoglione?tab=repositories'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  others projects
                </a>
              </p>
            </div>
            <div className='LinkIcons'>icos</div>
          </div>
        </motion.div>
      </StyledAbout>
    </AnimatePresence>
  );
};
