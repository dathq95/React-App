import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { HeaderRow } from './Header';
import BrandComponent from '../Brand/Brand.jsx';
import SearchComponent from '../Search/Search.jsx';
import NavComponent from '../Navigation/Navigation.jsx';
import AccountComponent from '../Account/Account.jsx';

const HeaderComponent = () => {
  return (
    <Container fluid className="bg-secondary">
      <HeaderRow xs={2}>
        <Col xs={2}>
          <BrandComponent />
        </Col>

        <Col xs={1}>Col-2</Col>

        <Col xs={4}>
          <SearchComponent />
        </Col>

        <Col xs={3}>
          <NavComponent />
        </Col>

        <Col xs={2}>
          <AccountComponent />
        </Col>
      </HeaderRow>
    </Container>
  );
};

export default HeaderComponent;
