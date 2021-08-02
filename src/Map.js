import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "./Map.css";

function Map({ data, zoom }) {
  // // create map
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [52.253, 20.9],
      zoom: zoom,
      layers: [L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")],
    });
  }, [zoom]);

  return <div id="map"></div>;
}

export default Map;
