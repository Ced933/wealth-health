


import '../EmployeeList/EmployeeList.scss'
import { useState } from "react";
// import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import DATA from "../data";
// import EditableCell from "./EditableCell";
// import StatusCell from "./StatusCell";
// import DateCell from "./DateCell";
// import Filters from "./Filters";
import SortIcon from "../../components/Icons/SortIcon"
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Filters from './Filters';

const columns = [
  {
    accessorKey: "firstName",
    header: "First name",
    size: 225,
    // cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "lastName",
    header: "Last name",
    // cell: StatusCell,
    enableSorting: true,
    enableColumnFilter: true,
    filterFn:  "includesString",
    
  },

//   {
//     accessorKey: "notes",
//     header: "Notes",
//     size: 225,
//     // cell: EditableCell,
//   },
  { 
  accessorKey:'dateOfBirth', 
    header: 'Date of Birth',
    enableSorting: true,

  },
  {accessorKey:'startDate', 
    header: 'Start date',
    enableSorting: true,
  },
  
  {accessorKey:'zipcode', 
    header: 'Zipcode',
    enableSorting: true,
   
  },
  {accessorKey:'state', 
    header: 'state',
    enableSorting: true,
   
  },
  { accessorKey:'departement', 
    header: 'Departement',
    enableSorting: true,
  
  },
];
export default function Table() {

    const employee = useSelector(state => state.employee.employeeInfo)
  const [data, setData] = useState(employee);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
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
    <div>
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
       <Link to={'/'}>
            Home
        </Link>
      <table className="table" w={table.getTotalSize()}>
        <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="th" w={header.getSize()} key={header.id}>
                {header.column.columnDef.header}
                {header.column.getCanSort() && (
                  <SortIcon
                   
                    mx={3}
                    fontSize={14}
                    onClick={header.column.getToggleSortingHandler()}
                  />
                )}
                {
                  {
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted()]
                }
                {/* <div
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${
                    header.column.getIsResizing() ? "isResizing" : ""
                  }`}
                ></div> */}
              </th>
            ))}
          </tr>
        ))}
</thead>
        {table.getRowModel().rows.map((row) => (
          <tr className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="td" w={cell.column.getSize()} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </table>
      <br />
      <p mb={2}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </p>
      <div size="sm" variant="outline">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

