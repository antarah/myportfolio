//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import styled from 'styled-components';
import { darkTheme } from './utils/Themes.js'
import { ThemeProvider } from "styled-components";
import MainSection from "./components/MainSection";

import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Positions from "./components/Positions";

import Experience from "./components/Experience";
import Education from "./components/Education";
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/Contact/index.js';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
       <Router >
         <Navbar />
        <Body>
         <MainSection />
          <Wrapper>
            <Projects />
            <Education />
            <Skills />

            <Positions />
            <Experience />
            <Contact />
            
          </Wrapper>
            
        </Body>
        </Router>
        </ThemeProvider>
  );
}

export default App;
