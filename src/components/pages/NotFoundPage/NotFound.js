import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  margin: 0 auto;
  background: transparent;
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
`;

export const Content = styled.div`
  position: relative;
  height: 240px;
`;

export const StatusCode = styled.h1`
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  color: #212529;
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
`;

export const Text = styled.span`
  text-shadow: -8px 0px 0px #475564;
`;

export const Message = styled.h3`
  font-family: 'Cabin', sans-serif;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #212529;
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
`;

export const Feedback = styled.h2`
  font-family: 'Cabin', sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #212529;
  margin-top: 0px;
  margin-bottom: 25px;
`;
