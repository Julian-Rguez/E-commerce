import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import {getAllUsers} from '../../../Redux/Actions/Actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users); 
  useEffect(() => {
    dispatch(getAllUsers())
  },[dispatch]);
  console.log("users",users)
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.roll, //alternate way
        id: "roll", //id required if you use accessorFn instead of accessorKey
        header: "Roll",
        Header: <i style={{ color: "green" }}>Age</i>, //optional custom markup
      },
      {
        accessorKey: "active", //simple recommended way to define a column
        header: "Active",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "mail", //simple recommended way to define a column
        header: "Mail",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "direction", //simple recommended way to define a column
        header: "Direction",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "telephone", //simple recommended way to define a column
        header: "Telephone",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={users} />;
}
