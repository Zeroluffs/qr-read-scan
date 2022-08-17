import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

export function Table() {
  const products = [
    { id: 1, name: "George", animal: "Monkey" },
    { id: 2, name: "Jeffrey", animal: "Giraffe" },
    { id: 3, name: "Alice", animal: "Giraffe" },
    { id: 4, name: "Alice", animal: "Tiger" },
  ];

  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Name", sort: true },
    { dataField: "animal", text: "Animal", sort: true },
  ];

  return (
    <div>
      <h3>React Bootstrap Table 2</h3>

      <BootstrapTable keyField="id" data={products} columns={columns} />
    </div>
  );
}
