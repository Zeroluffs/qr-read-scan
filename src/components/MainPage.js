import React from "react";
import { Table } from "./Table";
import { CodeQR } from "./QRCode";

const role = localStorage.getItem("role");
export function MainPage() {
  let mainComponent;
  if (role === "admin") {
    mainComponent = <Table />;
  } else {
    mainComponent = <CodeQR />;
  }

  return <div>{mainComponent}</div>;
}
