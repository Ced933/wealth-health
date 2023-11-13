import './Table.scss';
import { useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import SortIcon from "../../components/Icons/SortIcon"
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export default function Table() {

    const columns = [
      {
        accessorKey: "firstName",
        header: "First name",
      },
      {
        accessorKey: "lastName",
        header: "Last name",
      },
      { 
      accessorKey:'dateOfBirth', 
        header: 'Date of Birth',
      },
      {
        accessorKey:'startDate', 
        header: 'Start date',
      },
      {
        accessorKey:'zipcode', 
        header: 'Zipcode',
      },
      {
        accessorKey:'state', 
        header: 'State',
      },
      { accessorKey:'departement', 
        header: 'Departement',
      },
    ];

    const employee = useSelector(state => state.employee.employeeInfo);
    const storageEmployee = JSON.parse(localStorage.getItem('employees'));
    console.log(storageEmployee);
    console.log(employee);
    const [data, setData] = useState(storageEmployee ?storageEmployee:employee);
    const [filtering, setFiltering] = useState("");

    const table = useReactTable({
        data,
        columns,
        state: {
        globalFilter:filtering
        },
        onGlobalFilterChanged:setFiltering,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        columnResizeMode: "onChange",
        meta: {
        updateData: (rowIndex, columnId, value) =>
            setData((prev) =>
            prev.map((row, index) =>
                index === rowIndex
                ? {
                    ...prev[rowIndex],
                    [columnId]: value,
                    }
                : row
            )
            ),
        },
    });

    return (
        <div className='table-container'>
            <div className='table-box'>

            
            <div className='header-table'>
                <h1 className='h1-table'>View Current Employees</h1>
                <Link className='link' to={'/'}> Home </Link>
            </div>
             <input className='input-search' type="text"  value={filtering} placeholder='Search all columns' onChange={e=>(setFiltering(e.target.value))} />
            <table className="table" w={table.getTotalSize()}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr className="tr" key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                            <th className="th" w={header.getSize()} key={header.id}>
                                {header.column.columnDef.header}
                                {header.column.getCanSort() && (
                                <SortIcon onClick={header.column.getToggleSortingHandler()} />
                                )}
                                {
                                    {
                                        asc: " 🔼",
                                        desc: " 🔽",
                                    }
                                    [header.column.getIsSorted()]
                                }
                            </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                    <tr className="tr" key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                        <td className="td" w={cell.column.getSize()} key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
            <br />
            {/* pagination  */}
            
            <div className='container-page'>
                <button className='btn-page' onClick={()=>{
                    table.previousPage();
                }}
                disabled={!table.getCanPreviousPage()} >
                {"<"}
                </button>

                <button className='btn-page' onClick={()=>{
                    table.nextPage();
                }}
                disabled={!table.getCanNextPage()}>
                {">"}
                </button>
                <span className='pagination'>
                    <div>Page</div> 
                    <strong>{table.getState().pagination.pageIndex + 1} of {" "}{table.getPageCount()}</strong>
                </span>

                <select aria-label='select'
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                }}
                >
                    {[10,20,30].map((pageSize)=>
                    {
                    return <option className='option' key={pageSize} value={pageSize}>        
                                Show {pageSize}
                            </option>
                    })}
                </select>
            </div>
            </div>
        </div>
    );
};

