import React from 'react';
import API from '../utils/API';
import { Table } from 'reactstrap';
import TableBody from './table-body';
import SortBtn from './sort-button';

class EmployeeTable extends React.Component {
    state = {
        results: []
    };

    // When the component mounts, load the next employee to be displayed
    componentDidMount() { this.loadEmployees() }

    loadEmployees = () => {
        API.getEmployees()
            .then(res =>
                this.setState({ results: res.data.results })
            ).catch(err => console.log(err));
    };



    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>
                            Name
                        <SortBtn onClick={() => {
                                this.setState({
                                    results: this.state.results.sort(
                                        (a, b) => a.name.first.localeCompare(b.name.first))
                                })
                            }} />
                        </th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <TableBody
                    results={this.state.results}
                />
            </Table>
        );
    }
}

export default EmployeeTable;