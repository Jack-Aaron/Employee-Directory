import React from 'react';

const Search = (props) => {
    return (
        <div style={{
            width: '20%',
            margin: '0 auto',
            marginBottom: '1em',
            marginTop: '-1em',
            color: '#CAD2C5',
            fontSize:'large'
        }}>Search
            <div className="input-group input-group-md" >
                <input className="form-control" type="text" {...props} />
            </div>
        </div>
    );
};

export default Search;