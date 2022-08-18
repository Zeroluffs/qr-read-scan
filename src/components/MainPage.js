import React, { useEffect, useState } from "react";
import { Table } from "./Table";
import { CodeQR } from "./QRCode";

export function MainPage() {
  const [role, setRole] = useState("");
  let mainComponent;
  if (role === "admin") {
    mainComponent = <Table />;
  } else {
    mainComponent = <CodeQR />;
  }

  useEffect(() => {
    const roleStr = localStorage.getItem("role");
    setRole(JSON.parse(roleStr));
  }, []);
  return <div>{mainComponent}</div>;
}
