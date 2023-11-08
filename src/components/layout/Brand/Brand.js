import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';

export const BrandContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const BrandImage = styled(Image)`
  width: 35px;
  height: 35px;
`;

export const BrandNames = styled.span`
  font: bolder 18px sans-serif;
  color: #fff;
`;
