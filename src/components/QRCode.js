import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

export function CodeQR() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [, setStatus] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          let user = localStorage.getItem("user");
          user = JSON.parse(user)
          console.log(user);
          let updatedValue = {
            userid: user._id,
            lat: lat,
            lng: lng,
          };
          setUserInfo((userInfo) => ({
            ...userInfo,
            ...updatedValue,
          }));
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div>
      <QRCode value={JSON.stringify(userInfo)} />
    </div>
  );
}
