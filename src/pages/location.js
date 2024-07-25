import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import { useCookies } from "react-cookie";
/*
export const ChildLocationMap = ({ userID }) => {
  const [childLocation, setChildLocation] = useState(null);
  const [cookies, _] = useCookies(["access_token"]);

  useEffect(() => {
    const fetchLocation = async () => {
      console.log("hna ");
      try {
        const response = await axios.get(
          `http://localhost:3001/api/child-location/${userID}`,
          {
            headers: { authorization: cookies.access_token },
          }
        );
        setChildLocation(response.data);
      } catch (error) {
        console.error("Error fetching location:", error.message);
      }
    };

    const intervalId = setInterval(fetchLocation, 5000);
    console.log("intervalID ", intervalId);
    return () => clearInterval(intervalId);
  }, [userID, cookies.access_token]);

  if (!childLocation) {
    return null; // or loading indicator
  }

  return (
    <MapContainer center={[childLocation.lat, childLocation.lng]} zoom={16}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {childLocation && (
        <Marker position={[childLocation.lat, childLocation.lng]}>
          <Popup>Your child's location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};
*/
