import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Container, Row, Col } from 'reactstrap';
import EmployeeTable from './components/table';

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