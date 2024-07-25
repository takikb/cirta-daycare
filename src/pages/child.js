import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export const ChildLocationSharing = ({ userID }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io.connect("http://localhost:3001/", {
      transports: ["websocket"], // Explicitly enable WebSocket transport
    });
    newSocket.on("connect", () => {
      console.log("WebSocket connected");
    });
    console.log("WebSocket connected ", newSocket);

    newSocket.on("error", (error) => {
      console.error("WebSocket error:", error);
      newSocket.close();
    });

    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  const getLocation = async () => {
    if (!socket) {
      console.error("Socket connection not established");
      return;
    }
    const testLocation = {
      userID,
      latitude: 37.7749,
      longitude: -122.4194,
    };
    socket.emit("child-location", testLocation);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (socket) {
            const { latitude, longitude } = position.coords;
            socket.emit("child-location", testLocation);
          }
        },
        (error) => console.error("Error getting location:", error)
      );
    } else {
      console.warn("Geolocation not supported");
    }
  };

  const getloca = async () => {
    const testLocation = {
      userID,
      latitude: 37.7749,
      longitude: -122.4194,
    };
    socket.emit("child-location", testLocation);
  };

  return <button onClick={getloca}>Share Location</button>;
};
