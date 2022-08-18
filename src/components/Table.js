import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const api = axios.create({
  baseURL: `http://localhost:3000/api`,
});

export function Table() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const columns = [
    { dataField: "name", text: "Name", sort: true },
    { dataField: "company", text: "Company", sort: true },
    { dataField: "address", text: "Address", sort: true },
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  useEffect(() => {
    api
      .get("/company")
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setCompanies(res.data);
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  }, []);

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  return (
    <div>
      <h5>React Bootstrap Table Next with Sorting and Pagination</h5>
      <div className="qrReaderBtn">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            navigate("/reader");
          }}
        >
          QR Reader
        </button>
      </div>

      <BootstrapTable
        bootstrap4
        keyField="_id"
        data={companies}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={pagination}
      />
    </div>
  );
}
