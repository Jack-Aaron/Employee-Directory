import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/jumbotron';
import { Container, Row, Col, Table } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
