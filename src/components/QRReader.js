import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import { api } from "../utils";

export function QRReader(props) {
  const navigate = useNavigate();

  const [, setData] = useState("No result");
  const [, setArray] = useState({});

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
            const object = JSON.parse(result?.text);
            api
              .get("/company/" + object.userid)
              .then((res) => {
                if (res.data) {
                  localStorage.setItem("found", res.data);
                  navigate("/main");
                } else {
                  localStorage.setItem("found", res.data);
                  navigate("/main");
                }
              })
              .catch((err) => {
                console.log(err);
                alert("Error");
                navigate("/main");
              });
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
    </>
  );
}
