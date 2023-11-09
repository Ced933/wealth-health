import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
// import { flexRender,ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import './EmployeeList.scss';


export default function EmployeeList() {

  const employees = useSelector(state => state.employee.employeeInfo)
  console.log(employees);

  

  // s'occupe de créer les colonnes  
  const columnHelper = createColumnHelper()
  
  const columns = [
        columnHelper.accessor('firstName', {
         
          header: () => <span>First Name</span>,
         
        }),
        columnHelper.accessor(row => row.lastName, {
          id: 'lastName',
       
          header: () => <span>Last Name</span>,
        
        }),
        columnHelper.accessor('dateOfBirth', {
          header: () => 'Date of Birth',
      
        }),
        columnHelper.accessor('startDate', {
          header: () => <span>Start date</span>,
          
        }),
        
        columnHelper.accessor('zipcode', {
          header: 'Zipcode',
         
        }),
        columnHelper.accessor('state', {
          header: 'state',
         
        }),
        columnHelper.accessor('departement', {
          header: 'Departement',
        
        }),
  ]


  
  
    // mettre notre tableau useSelector dans data 
    const [data, setData] = React.useState(() => [...employees])
    
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
  
    return (
      <div className="p-2">

     <h1>List des Employee</h1>
       <Link to={'/'}>
       Home
       </Link>
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="h-4" />
        
      </div>
  )
}
