import React from 'react';

const api = {
  key: "021289b2046100cd59b0bac35e3c91cb",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            />
        </div>
        <div className="location-box">
          <div className="location">Fareham, UK</div>
          <div className="date"></div>

        </div>
      </main>
    </div>
  );
}

export default App;
