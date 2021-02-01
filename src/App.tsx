import React, { FC } from 'react';
import { Container } from 'semantic-ui-react';
import Timer from './containers/Timer';

import './App.css';

const App: FC = () => (
  <Container fluid>
    <Timer />
  </Container>
);

export default App;
