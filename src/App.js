import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Container, Row, Col } from 'reactstrap';
import EmployeeTable from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <EmployeeTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;