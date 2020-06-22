import React from 'react';
import { Table } from 'reactstrap';
import TableBody from './table-body';

class EmployeeTable extends React.Component {
    state = {
        image: '',
        name: '',
        phoneNumber: '',
        email: '',
        dob: ''
    };

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <TableBody />
            </Table>
        );
    }
}

export default EmployeeTable;