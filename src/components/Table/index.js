import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import Search from '../Search';
import { Table } from 'reactstrap';
import TableBody from '../Table-Body';
import SortBtn from '../SortBtn';


function EmployeeTable() {

    const [employees, setEmployees] = useState({
        results: [],
        filteredResults: [],
        currentSort: 'up'
    });

    useEffect(loadEmployees, []);

    function loadEmployees() {
        API.getEmployees()
            .then(res =>
                setEmployees({
                    results: res.data.results,
                    filteredResults: res.data.results
                })
            ).catch(err => console.log(err));
    };

    const searchFilter = (event) => {
        setEmployees({
            ...employees,
            filteredResults: employees.results.filter(
                person => person.name.first.toLowerCase().includes(
                    event.target.value.toLowerCase())
                    || person.name.last.toLowerCase().includes(
                        event.target.value.toLowerCase())
            )
        })
    };

    const sortFilter = () => {
        if (employees.currentSort === 'up') {
            setEmployees({
                ...employees,
                filteredResults: employees.filteredResults.sort(
                    (a, b) => a.name.last.localeCompare(b.name.last)),
                currentSort: 'down'
            })
        }
        else {
            setEmployees({
                ...employees,
                filteredResults: employees.filteredResults.sort(
                    (a, b) => b.name.last.localeCompare(a.name.last)),
                currentSort: 'up'
            })
        }
    };

    return (
        <div>
            <Search
                onChange={searchFilter}
                placeholder='John Smith'
            />
            <Table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>
                            Name
                        <SortBtn onClick={sortFilter} />
                        </th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <TableBody
                    results={employees.filteredResults}
                />
            </Table>
        </div>
    );
}


export default EmployeeTable;