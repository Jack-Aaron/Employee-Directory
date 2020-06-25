import React from 'react';
import moment from 'moment';
import './style.css';

function TableBody(props) {
    return (
        <tbody style={{
            fontSize: 'x-large'
        }}>
            {props.results.map(result => {
                return (
                    <tr className='tr-group' style={{
                        border: 'solid 5px #52796F'
                    }}>
                        {/* <th scope="row"></th> */}
                        <td><img src={result.picture.thumbnail}
                            alt=''
                            style={{
                                border: 'solid 2px #354f52',
                                borderRadius: '12px'
                            }} /></td>
                        <td>{result.name.first + ' ' + result.name.last}</td>
                        <td><a href={'tel:' + result.phone}>
                            {result.phone}</a></td>
                        <td><a href={'mailto:' + result.email}>
                            {result.email}</a></td>
                        <td>{moment(result.dob.date).format('MM/DD/YYYY')}</td>
                    </tr>
                )
            }
            )}
        </tbody>
    )
};

export default TableBody;
