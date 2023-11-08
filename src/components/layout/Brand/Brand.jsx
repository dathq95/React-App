import React from 'react';
import logo from '../../../assets/Logo/logo.png';
import { BrandContainer, BrandImage, BrandNames } from './Brand';
import { NavLink } from 'react-bootstrap';

const BrandComponent = () => {
  return (
    <NavLink href="/#">
      <BrandContainer>
        <BrandImage src={logo} alt="Brand" />
        <BrandNames>Technogory</BrandNames>
      </BrandContainer>
    </NavLink>
  );
};

export default BrandComponent;
