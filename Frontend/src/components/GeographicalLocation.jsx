import React, { useState, useEffect } from "react";

function GeographicalLocation({ location, setPlaceName }) {
  useEffect(() => {
    if (location) {
      const fetchPlaceName = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}`
          );
          const data = await response.json();
          setPlaceName(data.display_name);
        } catch (error) {
          console.error("Error fetching place name:", error);
        }
      };

      fetchPlaceName();
    }
  }, [location, setPlaceName]);

  return null;
}

export default GeographicalLocation;
