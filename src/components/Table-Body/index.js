import React from 'react';

function TableBody(props) {
    return (
        <tbody>
            {props.results.map(result => {
                return (
                    <tr>
                        {/* <th scope="row"></th> */}
                        <td><img src={result.picture.thumbnail} alt='' style={{borderRadius:'15px'}}/></td>
                        <td>{result.name.first + ' ' + result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date}</td>
                    </tr>
                )
            })
            }
        </tbody>
    )
}


export default TableBody;