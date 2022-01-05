import React from 'react';
import { StyledAbout } from '../components/styles/About.styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

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
            <p>
              For the front-end i'm using React with TypeScript, and the most
              important packages to highlight are :
            </p>
            <ul>
              <li>styled-components</li>
              <li>react-router-dom</li>
              <li>axios</li>
            </ul>

            <p>
              For the back-end I'm using Node js, hosted on heroku, and the most
              important packages to highlight are :
            </p>
            <ul>
              <li>express(framework)</li>
              <li>mongoose</li>
              <li>passport-jwt</li>
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
            <a
              href='https://www.instagram.com/pablo.gorg/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </StyledAbout>
    </AnimatePresence>
  );
};
