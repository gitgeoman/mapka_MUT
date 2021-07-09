import "./App.css";
import Map from "./Map";
import { useState } from "react";

import data from "./dane_";

function App() {
  const [wydzialy, setWydzialy] = useState(data);
  const [selected, setSelected] = useState(null);
  const [color, setColor] = useState(null);
  return (
    <div className="app">
      <h3>Mapa WAT</h3>
      <div className="app_wszystkieWydzialy">
        {wydzialy.map((item) => {
          // console.log(item);
          return (
            <div
              className="app_wydzial"
              key={item.id}
              onMouseOver={() => {
                setSelected(item.name);
                setColor(item.hex);
                // console.log(selected);
              }}
              onMouseOut={() => {
                setSelected("");
                setColor(null);
                // console.log(selected);
              }}
            >
              <img className="img" src={item.logo} alt="" />
            </div>
          );
        })}
      </div>
      <Map selected={selected} color={color} />
    </div>
  );
}

export default App;
