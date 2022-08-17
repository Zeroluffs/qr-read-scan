import React from "react";
import QRCode from "react-qr-code";

export function CodeQR() {
  return (
    <div>
      <QRCode value="Hi" />
    </div>
  );
}
