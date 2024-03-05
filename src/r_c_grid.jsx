import React, {useState} from 'react';
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";

const GridExample = () => {
    const rowData = [
        { name: 'John Doe', age: 30, country: 'USA', fullAddress: '123 Main St, Anytown, CA 12345' },
        { name: 'Jane Smith', age: 25, country: 'Canada', fullAddress: '456 Elm St, Anytown, ON A1B 2C3' },
        { name: 'Mike Jones', age: 32, country: 'UK', fullAddress: '789 Oak St, Anytown, London E1 2F3' },
      ];
      
      const columnDefs = [
        {
          field: 'name',
          headerName: 'Full Name', // Override default header based on field
        },
        {
          field: 'age',
          headerName: 'Age',
          valueGetter:(params)=>{
            const age = params.data.age;
            return "$"+age;
          }
        },
        {
          field: 'country',
          headerName: 'Country',
        },
        {
          field: 'fullAddress',
          headerName: 'Full Address',
          // Use valueGetter to modify the displayed address (optional)
          valueGetter: (params) => {
            const address = params.data.fullAddress;
            return address.substring(0, 20) + '...'; // Truncate to 20 characters
          },
        },
      ];
  
    return (
        // wrapping container with theme & size
      
            <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
              <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
              />
            </div>
       
      )
  
  }

export default GridExample;