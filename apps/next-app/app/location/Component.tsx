"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@workspace/ui/components/button";

const Component: React.FC = () => {
  const [status, setStatus] = useState("initial");
  const [coordinates, setCoordinates] = useState("--");

  const initPermissions = () => {
    setStatus("IN_PROGRESS");

    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        console.log("Initial permission state: ", permissionStatus.state);
        setStatus(permissionStatus.state);

        // 2) Listen for changes in that permission's state
        permissionStatus.addEventListener("change", () => {
          console.log("Permission state changed to: ", permissionStatus.state);
          setStatus(permissionStatus.state);
        });
      })
      .catch((err) => {
        console.error("Could not query permission:", err);
        setStatus("error");
      });
  };

  const askLocation = () => {
    setCoordinates("IN_PROGRESS");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Your location:", latitude, longitude);
        setCoordinates(`latitude:${latitude} | longitude: ${longitude}`);
      },
      (error) => {
        setCoordinates(error?.message || "NO_ERROR_MESSAGE");
        console.error("Error getting location:", error);
      },
      {
        enableHighAccuracy: true, // If you want the best possible results
        timeout: 5000, // Time out after 5 seconds
        maximumAge: 0, // Do not use cached location
      }
    );
  };

  useEffect(() => {
    if (
      typeof navigator !== "undefined" &&
      navigator.permissions &&
      typeof navigator.permissions.query === "function"
    ) {
      console.log("Permission API is at least partly supported");
      initPermissions();
    } else {
      console.error("Permission API not supported");
    }
  }, []);

  return (
    <div className="grid mt-20 gap-5 p-5 max-w-80">
      <p className="h-1 pt-10">Current status: {status}</p>
      <p className="pt-10">Coordinates: {coordinates}</p>

      <Button onClick={() => askLocation()} className="btn mt-2">
        GET LOCATIOIN
      </Button>
    </div>
  );
};

export default Component;
