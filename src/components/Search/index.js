import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const Search = (props) => {
    return (
        <FormGroup>
            <Label for="exampleSearch">Search</Label>
            <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="John Smith"
                style={{
                    width: '20%',
                    margin: '0 auto'
                }}
            />
        </FormGroup>
    );
};

export default Search;