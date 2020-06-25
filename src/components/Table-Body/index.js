import React from 'react';
import moment from 'moment';

function TableBody(props) {
    return (
        <tbody>
            {props.results.map(result => {
                return (
                    <tr>
                        {/* <th scope="row"></th> */}
                        <td><img src={result.picture.thumbnail}
                            alt=''
                            style={{
                                border: 'solid 2px black',
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
