import React from 'react';
import API from '../../utils/API';
import Search from '../Search';
import { Table } from 'reactstrap';
import TableBody from '../Table-Body';
import SortBtn from '../SortBtn';

class EmployeeTable extends React.Component {
    state = {
        results: [],
        filteredResults: [],
        currentSort: 'up'
    };

    // When the component mounts, load the next employee to be displayed
    componentDidMount() { this.loadEmployees() }

    loadEmployees = () => {
        API.getEmployees()
            .then(res =>
                this.setState({
                    results: res.data.results,
                    filteredResults: res.data.results
                })
            ).catch(err => console.log(err));
    };

    searchFilter = (event) => {
        this.setState({
            filteredResults: this.state.results.filter(
                person => person.name.first.toLowerCase().includes(
                    event.target.value.toLowerCase())
                    || person.name.last.toLowerCase().includes(
                        event.target.value.toLowerCase())
            )
        })
    };

    render() {
        return (
            <div>
                <Search
                    onChange={this.searchFilter}
                    placeholder='John Smith'
                />
                <Table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>
                                Name
                        <SortBtn onClick={() => {
                                    if (this.state.currentSort === 'up') {
                                        this.setState({
                                            filteredResults: this.state.filteredResults.sort(
                                                (a, b) => a.name.last.localeCompare(b.name.last)),
                                            currentSort: 'down'
                                        })
                                    }
                                    else {
                                        this.setState({
                                            filteredResults: this.state.filteredResults.sort(
                                                (a, b) => b.name.last.localeCompare(a.name.last)),
                                            currentSort: 'up'
                                        })
                                    }
                                }
                                } />
                            </th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <TableBody
                        results={this.state.filteredResults}
                    />
                </Table>
            </div>
        );
    }
}

export default EmployeeTable;