import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Container, Row, Col } from 'reactstrap';
import EmployeeTable from './components/Table';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
