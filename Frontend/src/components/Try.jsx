import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import GeographicalLocation from "../components/GeographicalLocation";

// Dhangadhi boundary (latitude and longitude for the area)
const dhangadhiBounds = [
  [28.6958, 80.57], // South-West corner
  [28.7158, 80.6], // North-East corner
];

function LocationMarker({ setLocation }) {
  const [position, setPosition] = useState(null);

  // Listen for map click event and set location
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      // Check if the selected position is inside the Dhangadhi boundary
      if (
        lat >= dhangadhiBounds[0][0] &&
        lat <= dhangadhiBounds[1][0] &&
        lng >= dhangadhiBounds[0][1] &&
        lng <= dhangadhiBounds[1][1]
      ) {
        setPosition(e.latlng);
        setLocation(e.latlng);
      } else {
        alert("Please select a location within Dhangadhi.");
      }
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Selected Location</Popup>
    </Marker>
  );
}

function ReportForm() {
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    // The effect runs once when the component mounts
    const handleResize = () => {
      const map = document.querySelector(".leaflet-container");
      if (map) {
        map._leaflet_id = null; // Clear any existing map instance (just in case)
      }
    };

    // Cleanup the map on unmount
    return () => {
      handleResize();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (!location || !description || !photo) {
      alert("Please fill out all fields.");
      return;
    }

    console.log({
      location,
      description,
      photo: photo.name,
    });

    alert("Report submitted successfully!");

    // Reset the form after submission
    setLocation(null);
    setDescription("");
    setPhoto(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          Waste Report Form
        </h1>
        <p className="text-gray-700">
          Help us keep our community clean by reporting waste issues. Select a
          location on the map, provide a brief description, upload a photo, and
          submit your report. Together, we can make a difference!
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Location Field */}
          <div>
            <label
              htmlFor="location"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Selected Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={
                location
                  ? `Latitude: ${location.lat}, Longitude: ${location.lng}`
                  : "Click on the map to select a location"
              }
              readOnly
            />
          </div>

          <GeographicalLocation location={location} />

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Describe the waste issue here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />
          </div>

          {/* Photo Upload Field */}
          <div>
            <label
              htmlFor="photo"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Upload Photo
            </label>
            <input
              type="file"
              id="photo"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            {photo && (
              <p className="text-gray-600 mt-2">
                Selected file: <strong>{photo.name}</strong>
              </p>
            )}
          </div>

          {/* Map Section */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <MapContainer
              id="map"
              center={[28.7058, 80.5867]} // Dhangadhi center coordinates
              zoom={14} // Zoom level for city view
              style={{ height: "400px", width: "100%" }}
              maxBounds={dhangadhiBounds} // Bound the map within Dhangadhi's area
              maxBoundsViscosity={1.0} // High viscosity to strictly prevent the map from going out of bounds
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker setLocation={setLocation} />
            </MapContainer>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;
