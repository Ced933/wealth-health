import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function EmployeeList() {

  const employees = useSelector(state => state.employee.employeeInfo)
  console.log(employees);
  return (
    <div className='page-employee'>
      <h1>List des Employee</h1>
      <Link to={'/'}>
      Home
      </Link>
      <div>
        {
          <p> {employees.map(employee => employee.firstName)}</p>
        }
      </div>

    </div>

  )
}
