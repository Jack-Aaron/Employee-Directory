import React from 'react';

function TableBody(props) {
    return (
        <tbody>
            {/* users.map(
            return ( */}
            <tr>
                {/* <th scope="row"></th> */}
                <td><img src={props.image} alt='' /></td>
                <td>{props.name}</td>
                <td>{props.phoneNumber}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
            </tr>
        </tbody>
    );
}

export default TableBody;