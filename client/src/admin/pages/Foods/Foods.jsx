import * as React from "react";
import MaterialReactTable from "material-react-table";
import { getAllFoods } from "../../../Redux/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useMemo } from "react";

export default function Foods() {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);
  useEffect(() => {
    dispatch(getAllFoods());
  }, [dispatch]);
  console.log(
    "a",
    foods.map((food) => food.available)
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.available, //alternate way
        id: "available", //id required if you use accessorFn instead of accessorKey
        header: "Available", //optional
        Header: <i style={{ color: "green" }}>Available</i>, //optional custom markup
      },
      {
        accessorKey: "price", //simple recommended way to define a column
        header: "Price",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "discount", //simple recommended way to define a column
        header: "Discount",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "type", //simple recommended way to define a column
        header: "Type",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "Fat", //simple recommended way to define a column
        header: "Fat",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "Sodium", //simple recommended way to define a column
        header: "Sodium",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "Sugar", //simple recommended way to define a column
        header: "Sugar",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "description", //simple recommended way to define a column
        header: "Description",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "qualification", //simple recommended way to define a column
        header: "Qualification",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorKey: "amount", //simple recommended way to define a column
        header: "Amount",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
    ],
    []
  );

  return (
    <>
      <div>
        <MaterialReactTable columns={columns} data={foods} />
      </div>
    </>
  );
}
