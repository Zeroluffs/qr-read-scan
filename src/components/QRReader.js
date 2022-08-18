import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

export function QRReader(props) {
  const navigate = useNavigate();

  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        constraints={{
          facingMode: "environment",
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            window.alert("found");
            navigate("/auth");
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
