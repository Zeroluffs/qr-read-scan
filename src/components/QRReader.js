import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export function QRReader(props) {
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
