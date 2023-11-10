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
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null} */}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
          <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
         
        </table>
        
        <div className="h-2" />
        <div>
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[1, 2, 15, 20, 25].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div> 
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> 
    </div>
       
        
      </div>
  )
}
