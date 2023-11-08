import React from 'react';
import { Container, Feedback, Message, StatusCode, Text, Wrapper, Content } from './NotFound.js';

const NotFoundPage = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Message className="message">Oops! Page not found</Message>

          <StatusCode>
            <Text>4</Text>
            <Text>0</Text>
            <Text>4</Text>
          </StatusCode>
        </Content>

        <Feedback className="feedback">we are sorry, but the page you requested was not found</Feedback>
      </Wrapper>
    </Container>
  );
};

export default NotFoundPage;
