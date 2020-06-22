import React from 'react';
import { Table } from 'reactstrap';
import TableBody from './table-body';

const EmployeeTable = (props) => {
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

export default EmployeeTable;