import React, { useEffect, useRef } from "react";
import L from "leaflet";

import "./Map.css";

function Map({ markerPosition }) {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [52.253, 20.9],
      zoom: 15,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  }, []);

  return <div id="map" />;
}

export default Map;
