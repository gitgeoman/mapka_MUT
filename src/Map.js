import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "./Map.css";

import budynki from "./spatialData/budynki.json";

function Map({ selected, color }) {
  console.log(selected);
  // budynki.features.map((item) => {
  //   console.log(item.properties.namePL == selected ? "tak" : "nie");
  // });
  let filtered = budynki.features.filter(
    (item) => item.properties.namePL === selected
  );
  console.log(filtered);

  // create map
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [52.253, 20.9],
      zoom: 15,
      layers: [L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")],
    });
  }, []);

  //add next layer to map
  const budynkiLayer = useRef(null); //creating empty layer
  useEffect(() => {
    budynkiLayer.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  //updating data inside the layer
  useEffect(() => {
    budynkiLayer.current.clearLayers();
    L.geoJSON(budynki, {
      style: {
        weight: 2,
        opacity: 1,
        color: "gray",
        dashArray: "3",
        fillOpacity: 0.7,
        fillColor: "#FFA000",
      },
    }).addTo(budynkiLayer.current);
  }, []);

  //add layer
  const buildingSelection = useRef(null); //creating empty layer
  useEffect(() => {
    buildingSelection.current?.clearLayers();
    buildingSelection.current = L.layerGroup().addTo(mapRef.current);
    L.geoJSON(filtered, {
      style: {
        weight: 2,
        opacity: 1,
        color: "blue",
        dashArray: "3",
        fillOpacity: 0.7,
        fillColor: "#111111",
      },
    }).addTo(buildingSelection.current);
  }, [selected, filtered]);

  return <div id="map"></div>;
}

export default Map;
