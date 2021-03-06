import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ECoin Dashboard</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="App">{children}</Container>
    </>
  );
};

export default Layout;
