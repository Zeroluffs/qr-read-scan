import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/api`,
});
export function QRReader(props) {
  const navigate = useNavigate();

  const [data, setData] = useState("No result");
  const [array, setArray] = useState({});

  return (
    <>
      <QrReader
        constraints={{
          facingMode: "environment",
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            setArray((userInfo) => ({
              ...userInfo,
              ...JSON.parse(result?.text),
            }));
            const userid = "62febfe45ae8a485a6b8ab77"
            api
              .post("/company/" + userid)
              .then((res) => {
                setData(res.data);
              })
              .catch((err) => {
                console.log(err);
                alert("Error Logging in please try again");
              });
            // window.alert("found");
            // navigate("/auth");
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
}
