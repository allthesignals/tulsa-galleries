import { useEffect, useState } from 'react';
import { csv } from 'd3-fetch';
import Header from './Header';
import Map from './Map';
import List from './List'
import MapToggle from './MapToggle';
import './App.css';

const GALLERIES_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRV476aaXFgAknoXAMO7nnbSbm0oIRdggzeRw7LUSv7QwMAQHrtM2rC3bRJmCOaOK_IGWA2wcfpj3eK/pub?gid=0&single=true&output=csv';

function App() {
  const [isMapVisible, toggleMap] = useState(true);
  const [galleries, setGalleries] = useState([]);

  // https://betterprogramming.pub/stop-lying-to-react-about-missing-dependencies-10612e9aeeda
  // https://overreacted.io/a-complete-guide-to-useeffect/
  useEffect(() => {
    const fetchData = async () => {
      const galleries = await csv(GALLERIES_URL, (d) => {
        return {
          ...d,
          Longitude: +d.Longitude,
          Latitude: +d.Latitude,
        };
      });

      setGalleries(galleries);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header
        float={isMapVisible}
      />

      {isMapVisible ?
        <Map
          data={galleries}
        />
      : <List
          data={galleries}
        />
      }

      <MapToggle
        handleClick={() => toggleMap(!isMapVisible)}
      >
        <h1>{ isMapVisible ? 'List' : 'Map' }</h1>
      </MapToggle>
    </>
  );
}

export default App;
