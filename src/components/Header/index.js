import React from 'react';
import { Jumbotron } from 'reactstrap';
import Search from '../Search'

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Employee Directory</h1>
        <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
      </Jumbotron>
      <Search />
    </div>
  );
};

export default Header;