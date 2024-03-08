import React from "react";
import Sidebar from "./Sidebar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "bootstrap/dist/css/bootstrap.min.css";

const rows = [
    { id: 1, title: 'John Doe', discription: 30 },
    { id: 2, title: 'Jane Smith', discription: 25 },
    { id: 3, title: 'Peter Parker', discription: 22 },
  ];

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title' },
    { field: 'discription', headerName: 'Discription' },
  ];

const Blog = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <Sidebar />
          <div className="col-sm-10 ">
            <h1 className="text-danger text-center">Tetime</h1>
            <h3 className="text-dark text-center">Blog of the Time</h3>

            <TableContainer component={Paper}>
      <Table sx={{ width: 1000 }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
