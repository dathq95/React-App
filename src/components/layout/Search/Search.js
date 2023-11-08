import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

export const SearchContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const SearchInput = styled(Form.Control)`
  outline: none;
  border: none;
  font-size: 14px;
  color: #000;
  background-color: #fff;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &.form-control:focus {
    outline: none;
    box-shadow: none;
    color: #000;
    background-color: #fff;
  }

  &::-webkit-search-cancel-button,
  &::-webkit-clear-button {
    display: none;
  }
`;

export const SearchButton = styled(Button)`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: #fff;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    box-shadow: none;
    color: #a7a7a7;
    background-color: #fff;
  }

  &:active,
  &:focus-visible {
    border: none;
    outline: none;
    box-shadow: none;
    color: #ff7900 !important;
  }
`;

export const Divider = styled.span`
  height: 20px;
  width: 1px;
  background-color: #fff;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    transform: scaleX(0.5);
  }
`;
