import React from 'react';
import { StyledAbout } from '../components/styles/About.styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <AnimatePresence>
      <StyledAbout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='main-container'
        >
          <div>
            <h2>Some information about the page</h2>
            <p>For the front-end i'm using React with TypeScript and :</p>
            <ul>
              <li>To manage global state, useContext with useReducer</li>
              <li>styled-components, with vanilla CSS</li>
              <li>react-router-dom</li>
              <li>axios</li>
              <li>custom hooks</li>
            </ul>

            <p>For the back-end I'm using Node js, hosted on heroku, using:</p>
            <ul>
              <li>Express</li>
              <li>mongoose</li>
              <li>passport-jwt</li>
              <li>jest and superTest for endpoint testing</li>
            </ul>
          </div>
          <div className='link-container'>
            <div>
              <div>
                <a
                  href='https://github.com/pablo-gorgoglione'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <FaGithub />
                </a>
              </div>
              <div>
                <a
                  href='https://github.com/pablo-gorgoglione/blog-app'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  front-end
                </a>
                <a
                  href='https://github.com/pablo-gorgoglione/blog-api'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  back-end
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </StyledAbout>
    </AnimatePresence>
  );
};
