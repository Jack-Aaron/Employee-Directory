import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Employee Directory</h1>
        <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
      </Jumbotron>
    </div>
  );
};

export default Header;