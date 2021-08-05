import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "./Map.css";
import militaryUnits from "./spatialData/MilitaryUnits";

import "leaflet/dist/leaflet.css";
//ikonki
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import brygada from "./spatialData/brygada.svg";
import brygada__pancerna from "./spatialData/brygada__pancerna.svg";
import dywizja from "./spatialData/dywizja.svg";

function Map({ data, zoom }) {
  //   //ikonka domyślna
  // let DefaultIcon = (name) => {
  //   console.log(name);
  //   if (name.includes("Dywizja")) {
  //     return L.icon({
  //       iconUrl: dywizja,
  //       iconSize: [100, 35],
  //       // iconAnchor: [22, 94],
  //     });
  //   } else if() {
  //     return L.icon({
  //       iconUrl: brygada__pancerna,
  //       iconSize: [18, 35],
  //     });
  //   }
  // };
  //ikonka domyślna
  let DefaultIcon = (name) => {
    console.log(name);
    if (name.includes("Brygada")) {
      return L.icon({
        iconUrl: brygada,
        iconSize: [100, 35],
        // iconAnchor: [22, 94],
      });
    } else if (name.includes("Dywizja")) {
      return L.icon({
        iconUrl: dywizja,
        iconSize: [18, 35],
      });
    } else if (name.includes("pancerna")) {
      return L.icon({
        iconUrl: brygada__pancerna,
        iconSize: [18, 35],
      });
    } else {
      return L.icon({
        iconUrl: icon,
        iconSize: [18, 35],
      });
    }
  };
  // // create map
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [52.253, 20.9],
      zoom: zoom,
      layers: [L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")],
    });
  }, []);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // // update markers with circle icon
  // const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
  // useEffect(() => {
  //   layerRef.current.clearLayers();
  //   militaryUnits.forEach((marker) => {
  //     L.circleMarker([marker.lat, marker.lng], {
  //       radius: 8,
  //       fillColor: `#${randomColor()}`,
  //       color: "#000",
  //       weight: 1,
  //       opacity: 1,
  //       fillOpacity: 0.8,
  //     })
  //       .bindPopup(marker.name)
  //       .addTo(layerRef.current);
  //   });
  // }, [militaryUnits]);

  // update markers with custom icon
  useEffect(() => {
    layerRef.current.clearLayers();
    militaryUnits.forEach((marker) => {
      return L.marker([marker.lat, marker.lng], {
        icon: DefaultIcon(marker.name),
      })
        .bindPopup(marker.name)
        .addTo(layerRef.current);
    });
  });

  return <div id="map"></div>;
}

export default Map;
