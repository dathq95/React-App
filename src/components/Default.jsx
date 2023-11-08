import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderComponent from './layout/Header/Header.jsx';
import FooterComponent from './layout/Footer/Footer.jsx';

const DefaultComponent = ({ children }) => {
  return (
    <Container fluid className="p-0">
      <HeaderComponent />

      {children}

      <FooterComponent />
    </Container>
  );
};

export default DefaultComponent;
