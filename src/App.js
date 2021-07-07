import "./App.css";
import Map from "./Map";

import WAT from "./img/wat_logo.jpg";
import wydzialy from "./dane_";

function App() {
  return (
    <div className="app">
      <h3>Mapa WAT</h3>
      <div className="app_wszystkieWydzialy">
        {wydzialy.map((item) => {
          console.log(item);
          return (
            <div className="app_wydzial" key={item.id}>
              <img className="newImage" src={item.short} />

              {item.name}
            </div>
          );
        })}
      </div>

      <Map />
    </div>
  );
}

export default App;
