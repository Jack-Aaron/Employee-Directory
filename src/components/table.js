import React from 'react';
import API from '../utils/API';
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

    // When the component mounts, load the next employee to be displayed
    componentDidMount() {
        this.loadNextEmployee();
    }

    loadNextEmployee = () => {
        API.getEmployees()
            .then(res =>
                this.setState({
                    image: res.data.results[0].picture.thumbnail,
                    name: res.data.results[0].name.first + ' ' + res.data.results[0].name.last,
                    phoneNumber: res.data.results[0].phone,
                    email: res.data.results[0].email,
                    dob: res.data.results[0].dob.date
                })
            )
            .catch(err => console.log(err));
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
                <TableBody
                    image={this.state.image}
                    name={this.state.name}
                    phoneNumber={this.state.phoneNumber}
                    email={this.state.email}
                    dob={this.state.dob}
                />
            </Table>
        );
    }
}

export default EmployeeTable;