import React from "react";
import firebaseConfig from './util/firebase.config.json'
import firebase from 'firebase'
import styled from 'styled-components'
import GlobalStyle from "./theme/globalStyle";
import Pages from './pages'

const AppContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

function App() {
  
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Pages/>
      </AppContainer>
    </>
  )
}

export default App;
