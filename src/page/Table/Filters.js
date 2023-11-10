
  // import SearchIcon from "../../components/Icons/SearchIcon";

  
  // const Filters = ({ columnFilters, setColumnFilters }) => {
  //   const [globalFilter, setGlobalFilter] = React.useState('')
  //   console.log(columnFilters);
  //   const firstName = columnFilters.find((f) => f.id === "firstName")?.value || ""  ;
  //   const lastName = columnFilters.find((f) => f.id === "lastName")?.value || "";
  //   const zipCode = columnFilters.find((f) => f.id === "zipcode")?.value || "";
  //   const onFilterChange = (id, value) =>
  //     setColumnFilters((prev) =>
  //       prev
  //         .filter((f) => f.id !== id)
  //         .concat({
  //           id,
  //           value,
  //         })
  //     );
  
  //   return (
  //     <div mb={6} spacing={3}>
  //       <div size="sm" maxW="12rem">
         
  //           <SearchIcon  />
          
  //         <input
  //           type="text"
  //           variant="filled"
  //           placeholder="First name"
  //           borderRadius={5}
  //           value={firstName}
  //           onChange={(e) =>{ onFilterChange("firstName", e.target.value)
          
          
  //         }}
  //         />
  //          <input
  //           type="text"
  //           variant="filled"
  //           placeholder="Last name"
  //           borderRadius={5}
  //           value={lastName}
  //           onChange={(e) =>{ onFilterChange("lastName", e.target.value)
          
          
  //         }}
  //         />
  //          <input
  //           type="text"
  //           variant="filled"
  //           placeholder="zipcode"
  //           borderRadius={5}
  //           value={zipCode}
  //           onChange={(e) =>{ onFilterChange("zipcode", e.target.value)
          
          
  //         }}
  //         />
  //       </div>
      
  //     </div>
  //   );
  // };
  // export default Filters;